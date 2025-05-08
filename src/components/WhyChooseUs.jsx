import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    title: 'Secure Transactions',
    description: 'Bank-level security for all your license transfers',
  },
  {
    icon: <ClockIcon className="w-8 h-8" />,
    title: 'Fast Processing',
    description: 'Get paid within 24 hours of acceptance',
  },
  {
    icon: <UserGroupIcon className="w-8 h-8" />,
    title: 'Expert Support',
    description: '24/7 dedicated customer service team',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 dark:text-white">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 