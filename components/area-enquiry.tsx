'use client'

import type { FormEvent } from 'react'

const cities = [
  'Visakhapatnam', 'Vizianagaram', 'Srikakulam', 'Anakapalle',
  'Kakinada', 'Rajamahendravaram', 'Eluru', 'Vijayawada',
  'Guntur', 'Ongole', 'Nellore', 'Tirupati', 'Kadapa', 'Kurnool', 'Anantapur',
]

export function AreaEnquiry({ phone }: { phone: string }) {
  function openWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const town = String(form.get('town')).trim()
    const pin = String(form.get('pin')).trim()
    const service = String(form.get('service'))
    const message = `Hello Prasad Enterprises, please confirm availability for ${service} in ${town}, Andhra Pradesh, PIN ${pin}. I'd like to discuss a quote.`
    const url = new URL(`https://wa.me/${phone.replace(/\D/g, '')}`)
    url.searchParams.set('text', message)
    window.location.assign(url.toString())
  }

  return (
    <form className="area-enquiry" onSubmit={openWhatsApp}>
      <label htmlFor="coverage-service">Service</label>
      <select id="coverage-service" name="service" required defaultValue="">
        <option value="" disabled>Select a service</option>
        <option>Invisible grills</option>
        <option>Cloth drying hangers</option>
        <option>Iron grills</option>
        <option>Shoe racks</option>
        <option>Cricket nets</option>
        <option>Balcony safety nets</option>
        <option>Pigeon safety nets</option>
      </select>
      <label htmlFor="coverage-town">Town or village</label>
      <input id="coverage-town" name="town" list="coverage-cities" autoComplete="address-level2" required maxLength={100} pattern={'.*\\S.*'} />
      <datalist id="coverage-cities">
        {cities.map(city => <option key={city} value={city} />)}
      </datalist>
      <label htmlFor="coverage-pin">Six-digit PIN code</label>
      <input id="coverage-pin" name="pin" inputMode="numeric" autoComplete="postal-code" required pattern="[1-9][0-9]{5}" maxLength={6} />
      <button className="button button-saffron" type="submit">Continue to WhatsApp ↗</button>
    </form>
  )
}
