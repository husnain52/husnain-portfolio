import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdenzozw'

const SUBJECT_TEMPLATES = [
  'Full-Time Opportunity',
  'Contract / Freelance',
  'Technical Architecture',
  'Quick Consultation',
]

const Field = ({ label, error, children, id }: { label: string; error?: string; children: React.ReactNode; id: string }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--foreground)' }}>
      {label}
    </label>
    {children}
    {error && (
      <p className="text-xs flex items-center gap-1.5 text-rose-500 font-medium" role="alert">
        <AlertCircle size={12} aria-hidden="true" /> {error}
      </p>
    )}
  </div>
)

export const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>('idle')

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ContactPayload>({
    defaultValues: {
      subject: '',
    },
  })

  const onSubmit = async (data: ContactPayload) => {
    setFormState('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setFormState('success'); reset() }
      else setFormState('error')
    } catch { setFormState('error') }
  }

  if (formState === 'success') {
    return (
      <div className="glass-card p-10 flex flex-col items-center justify-center gap-4 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
          <CheckCircle size={28} aria-hidden="true" />
        </div>
        <p className="font-bold text-xl tracking-tight" style={{ color: 'var(--foreground)' }}>
          Message sent successfully!
        </p>
        <p className="text-sm max-w-sm" style={{ color: 'var(--foreground-muted)' }}>
          Thank you for reaching out. I've received your note and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-lg border transition-all duration-200 hover:scale-105 mt-2"
          style={{
            backgroundColor: 'var(--surface)',
            borderColor: 'var(--border)',
            color: 'var(--foreground)',
          }}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass-card p-6 md:p-8 flex flex-col gap-5">
      
      {/* Quick Subject Suggestions */}
      <div className="space-y-2">
        <span className="text-[11px] uppercase tracking-wider font-semibold opacity-75" style={{ color: 'var(--foreground-muted)' }}>
          Quick topics:
        </span>
        <div className="flex flex-wrap gap-2">
          {SUBJECT_TEMPLATES.map((tmpl) => (
            <button
              key={tmpl}
              type="button"
              onClick={() => setValue('subject', tmpl, { shouldValidate: true })}
              className="text-xs font-medium px-3 py-1 rounded-full border transition-all duration-150 hover:border-blue-500"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                color: 'var(--foreground-muted)',
              }}
            >
              {tmpl}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your Name" id="name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            autoComplete="name"
            className="w-full px-4 py-2.5 rounded-xl border text-sm transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            style={{
              backgroundColor: 'var(--background)',
              borderColor: errors.name ? '#f43f5e' : 'var(--border)',
              color: 'var(--foreground)',
            }}
            {...register('name', {
              required: 'Please enter your name',
            })}
          />
        </Field>

        <Field label="Email Address" id="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            className="w-full px-4 py-2.5 rounded-xl border text-sm transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            style={{
              backgroundColor: 'var(--background)',
              borderColor: errors.email ? '#f43f5e' : 'var(--border)',
              color: 'var(--foreground)',
            }}
            {...register('email', {
              required: 'Please enter your email',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' },
            })}
          />
        </Field>
      </div>

      <Field label="Subject" id="subject" error={errors.subject?.message}>
        <input
          id="subject"
          type="text"
          placeholder="e.g. Full-stack role / Next.js project build"
          className="w-full px-4 py-2.5 rounded-xl border text-sm transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          style={{
            backgroundColor: 'var(--background)',
            borderColor: errors.subject ? '#f43f5e' : 'var(--border)',
            color: 'var(--foreground)',
          }}
          {...register('subject', {
            required: 'Please enter a subject',
          })}
        />
      </Field>

      <Field label="Message" id="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell me about your product requirements, team needs, or questions..."
          className="w-full px-4 py-2.5 rounded-xl border text-sm transition-all duration-200 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          style={{
            backgroundColor: 'var(--background)',
            borderColor: errors.message ? '#f43f5e' : 'var(--border)',
            color: 'var(--foreground)',
          }}
          {...register('message', {
            required: 'Please enter your message',
            minLength: { value: 15, message: 'Message should be at least 15 characters' },
          })}
        />
      </Field>

      {formState === 'error' && (
        <p className="text-xs flex items-center gap-2 text-rose-500 font-medium" role="alert">
          <AlertCircle size={14} aria-hidden="true" />
          Something went wrong. Please try again or reach out directly at husnainakhtar06@gmail.com.
        </p>
      )}

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backgroundColor: 'var(--accent)',
          color: '#ffffff',
        }}
      >
        {formState === 'submitting' ? (
          <><Loader2 size={14} className="animate-spin" aria-hidden="true" /> Sending Message…</>
        ) : (
          <><Send size={14} aria-hidden="true" /> Send Message</>
        )}
      </button>
    </form>
  )
}

