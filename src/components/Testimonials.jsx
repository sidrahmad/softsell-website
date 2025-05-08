import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'IT Director',
    company: 'TechCorp Inc.',
    content: 'SoftSell made it incredibly easy to recover value from our unused licenses. The process was smooth and professional.',
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager',
    company: 'Global Solutions Ltd.',
    content: 'Outstanding service! We received payment within hours of accepting the offer. Will definitely use again.',
  },
]

export function Testimonials() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 dark:text-white">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 