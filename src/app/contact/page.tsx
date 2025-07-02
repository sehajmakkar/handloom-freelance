import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-earth-100 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-earth-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Whether you have questions about our products, need bulk pricing, or want to
            partner with us, we&apos;re here to help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-earth-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-cream-50" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-1">Phone</h3>
                    <p className="text-earth-600">+1 (555) 123-4567</p>
                    <p className="text-earth-600">+1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-cream-50" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-1">Email</h3>
                    <p className="text-earth-600">info@artisanthreads.com</p>
                    <p className="text-earth-600">bulk@artisanthreads.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-cream-50" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-1">Address</h3>
                    <p className="text-earth-600">
                      123 Artisan Street
                      <br />
                      Craft District
                      <br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-cream-50" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-1">Business Hours</h3>
                    <p className="text-earth-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-earth-100 rounded-xl p-6">
              <h3 className="font-semibold text-earth-900 mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-cream-50 rounded-lg hover:bg-cream-100 transition-colors">
                  <div className="font-medium text-earth-900">Bulk Inquiry</div>
                  <div className="text-sm text-earth-600">Get wholesale pricing</div>
                </button>
                <button className="w-full text-left p-3 bg-cream-50 rounded-lg hover:bg-cream-100 transition-colors">
                  <div className="font-medium text-earth-900">Product Support</div>
                  <div className="text-sm text-earth-600">Questions about products</div>
                </button>
                <button className="w-full text-left p-3 bg-cream-50 rounded-lg hover:bg-cream-100 transition-colors">
                  <div className="font-medium text-earth-900">Partnership</div>
                  <div className="text-sm text-earth-600">Become a partner</div>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-cream-50 border border-earth-200 rounded-xl p-8">
              <h2 className="font-playfair text-2xl font-bold text-earth-900 mb-6">Send us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-earth-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-earth-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-earth-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-earth-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-earth-900 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="general">General Inquiry</option>
                    <option value="bulk">Bulk Order</option>
                    <option value="product">Product Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-earth-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-earth-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent resize-vertical"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 text-terracotta-500 focus:ring-terracotta-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-earth-700">
                    I would like to receive updates about new products and special offers
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-terracotta-500 text-cream-50 rounded-lg hover:bg-terracotta-600 transition-colors font-medium"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="font-playfair text-3xl font-bold text-earth-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-earth-900 mb-2">
                  What is your minimum order quantity for bulk orders?
                </h3>
                <p className="text-earth-600 text-sm">
                  Our minimum order quantity varies by product. Generally, it&apos;s 50 pieces for textiles and 25 pieces for
                  handicrafts. Contact us for specific requirements.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-earth-900 mb-2">Do you ship internationally?</h3>
                <p className="text-earth-600 text-sm">
                  Yes, we ship worldwide. Shipping costs and delivery times vary by location. We&apos;ll provide detailed
                  shipping information with your quote.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-earth-900 mb-2">Can I customize products?</h3>
                <p className="text-earth-600 text-sm">
                  We offer customization services for colors, patterns, and sizes. Customization is available for both
                  retail and bulk orders.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-earth-900 mb-2">What is your return policy?</h3>
                <p className="text-earth-600 text-sm">
                  We offer a 30-day return policy for retail orders. Items must be in original condition. Custom orders
                  are non-returnable unless there&apos;s a manufacturing defect.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-earth-900 mb-2">How long does production take?</h3>
                <p className="text-earth-600 text-sm">
                  Production time varies by product complexity and order size. Typically, retail orders ship within 5-7
                  business days, while bulk orders take 2-4 weeks.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-earth-900 mb-2">Do you provide certificates of authenticity?</h3>
                <p className="text-earth-600 text-sm">
                  Yes, all our products come with certificates of authenticity that detail the materials used, origin,
                  and artisan information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
