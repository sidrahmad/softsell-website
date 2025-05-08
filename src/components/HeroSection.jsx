import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Turn Unused Software into
            <span className="text-primary-600"> Instant Cash</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Maximize the value of your unused software licenses. Quick, secure, and hassle-free.
          </p>
          <button className="btn btn-primary">
            Get Your Instant Quote
            <ChevronRightIcon className="w-5 h-5 ml-2 inline-block" />
          </button>
        </motion.div>
      </div>
    </section>
  )
} 