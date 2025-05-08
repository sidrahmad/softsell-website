import { motion } from 'framer-motion'
import {
  CloudArrowUpIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'

const steps = [
  {
    icon: <CloudArrowUpIcon className="w-12 h-12" />,
    title: 'Upload License',
    description: 'Share your software license details through our secure platform',
  },
  {
    icon: <DocumentCheckIcon className="w-12 h-12" />,
    title: 'Get Valuation',
    description: 'Receive an instant market-value assessment for your licenses',
  },
  {
    icon: <CurrencyDollarIcon className="w-12 h-12" />,
    title: 'Get Paid',
    description: 'Accept our offer and receive payment within 24 hours',
  },
]

export function HowItWorks() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 dark:text-white">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
            >
              <div className="text-primary-600 mb-4 inline-block">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 