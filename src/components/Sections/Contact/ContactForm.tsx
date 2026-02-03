import emailjs from '@emailjs/browser';
import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

// Configuration EmailJS
const EMAILJS_SERVICE_ID = 'service_2gaytd9';
const EMAILJS_TEMPLATE_ID = 'template_4jt54uf';
const EMAILJS_PUBLIC_KEY = 'ZFE8nyZB5RkKPO-8h';

// Initialiser EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsLoading(true);
      setStatus('idle');

      try {
        // Paramètres pour le template EmailJS
        const templateParams = {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        };

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY,
        );

        setStatus('success');
        setStatusMessage('Message envoyé avec succès! ✓');
        setData(defaultData);

        // Réinitialiser le message après 5 secondes
        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 5000);
      } catch (error) {
        setStatus('error');
        setStatusMessage(
          error instanceof Error ? error.message : 'Erreur lors de l\'envoi du message',
        );
      } finally {
        setIsLoading(false);
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <>
      <form
        className="grid min-h-[320px] grid-cols-1 gap-y-4"
        method="POST"
        onSubmit={handleSendMessage}>
        <input
          className={inputClasses}
          disabled={isLoading}
          name="name"
          onChange={onChange}
          placeholder="Nom"
          required
          type="text"
          value={data.name}
        />
        <input
          autoComplete="email"
          className={inputClasses}
          disabled={isLoading}
          name="email"
          onChange={onChange}
          placeholder="Email"
          required
          type="email"
          value={data.email}
        />
        <textarea
          className={inputClasses}
          disabled={isLoading}
          maxLength={250}
          name="message"
          onChange={onChange}
          placeholder="Message"
          required
          rows={6}
          value={data.message}
        />
        <button
          aria-label="Envoyer le formulaire de contact"
          className="w-max rounded-full border-2 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
          type="submit">
          {isLoading ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>
      {statusMessage && (
        <div
          className={`mt-4 rounded-md px-4 py-3 text-sm font-medium ${
            status === 'success'
              ? 'bg-green-900/20 text-green-300'
              : 'bg-red-900/20 text-red-300'
          }`}>
          {statusMessage}
        </div>
      )}
    </>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
