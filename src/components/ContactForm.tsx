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

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'var(--background)',
  border: '1px solid var(--border)',
  color: 'var(--foreground)',
  padding: '12px 16px',
  fontSize: '15px',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
}

const Field = ({ label, error, children, id }: { label: string; error?: string; children: React.ReactNode; id: string }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-[13px] tracking-[0.08em] uppercase font-medium" style={{ color: 'var(--foreground-muted)' }}>
      {label}
    </label>
    {children}
    {error && (
      <p className="text-[13px] flex items-center gap-1" style={{ color: '#ef4444' }} role="alert">
        <AlertCircle size={11} aria-hidden="true" /> {error}
      </p>
    )}
  </div>
)

export const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>('idle')

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactPayload>()

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
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle size={32} style={{ color: 'var(--accent)' }} aria-hidden="true" />
        <p className="font-display font-semibold text-xl" style={{ color: 'var(--foreground)' }}>Message sent.</p>
        <p className="text-base" style={{ color: 'var(--foreground-muted)' }}>I'll get back to you within 24 hours.</p>
        <button
          onClick={() => setFormState('idle')}
          className="text-[13px] tracking-[0.08em] uppercase font-medium px-4 py-2 border transition-all duration-200 hover:scale-[1.015]"
          style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" id="name" error={errors.name?.message}>
          <input
            id="name" type="text" placeholder="Your name" autoComplete="name"
            style={{ ...inputStyle, borderColor: errors.name ? '#ef4444' : 'var(--border)' }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
            {...register('name', {
              required: 'Name is required',
              onBlur: (e) => (e.target.style.borderColor = errors.name ? '#ef4444' : 'var(--border)'),
            })}
          />
        </Field>
        <Field label="Email" id="email" error={errors.email?.message}>
          <input
            id="email" type="email" placeholder="you@example.com" autoComplete="email"
            style={{ ...inputStyle, borderColor: errors.email ? '#ef4444' : 'var(--border)' }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
              onBlur: (e) => (e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border)'),
            })}
          />
        </Field>
      </div>

      <Field label="Subject" id="subject" error={errors.subject?.message}>
        <input
          id="subject" type="text" placeholder="What's this about?"
          style={{ ...inputStyle, borderColor: errors.subject ? '#ef4444' : 'var(--border)' }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
          {...register('subject', {
            required: 'Subject is required',
            onBlur: (e) => (e.target.style.borderColor = errors.subject ? '#ef4444' : 'var(--border)'),
          })}
        />
      </Field>

      <Field label="Message" id="message" error={errors.message?.message}>
        <textarea
          id="message" rows={5} placeholder="Tell me about your project or opportunity..."
          style={{ ...inputStyle, resize: 'none', borderColor: errors.message ? '#ef4444' : 'var(--border)' }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 20, message: 'Message must be at least 20 characters' },
            onBlur: (e) => (e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border)'),
          })}
        />
      </Field>

      {formState === 'error' && (
        <p className="text-[13px] flex items-center gap-2" style={{ color: '#ef4444' }} role="alert">
          <AlertCircle size={13} aria-hidden="true" />
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="inline-flex items-center gap-2 text-[13px] tracking-[0.08em] uppercase font-medium px-6 py-3 border w-fit transition-all duration-200 hover:scale-[1.015] disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ color: 'var(--background)', backgroundColor: 'var(--foreground)', borderColor: 'var(--foreground)' }}
      >
        {formState === 'submitting' ? (
          <><Loader2 size={13} className="animate-spin" aria-hidden="true" /> Sending…</>
        ) : (
          <><Send size={13} aria-hidden="true" /> Send message</>
        )}
      </button>
    </form>
  )
}
