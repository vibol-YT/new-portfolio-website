
"use client"

import { motion } from "framer-motion"
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaTelegram } from "react-icons/fa"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { BsTelegram } from "react-icons/bs"

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.3,
          duration: 0.8,
          ease: "easeOut",
        },
      }}
      className="w-full max-w-5xl mx-auto px-4 py-10"
    >
      <Card className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-2xl">
        <div className="grid md:grid-cols-5">

          {/* LEFT - Contact Information */}
          <div className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-cyan-500/20 via-black/20 to-transparent p-8 md:p-10">
            
            {/* Decorative Circle */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                  Get In Touch
                </span>

                <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                  Let's work
                  <span className="block text-cyan-400">
                    together.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  Have a project in mind or want to discuss a potential
                  collaboration? Feel free to send me a message.
                </p>
              </div>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-400">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-xs text-white/40">Email</p>
                    <p className="text-sm text-white">
                      simvibol914@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-400">
                    <FaPhone />
                  </div>

                  <div>
                    <p className="text-xs text-white/40">Phone</p>
                    <p className="text-sm text-white">
                      +855 77733920
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-400">
                    <BsTelegram />
                  </div>

                  <div>
                    <p className="text-xs text-white/40">Telegram</p>
                    <p className="text-sm text-white">
                      @vibol_0yt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="md:col-span-3 p-6 md:p-10">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl font-semibold text-white">
                Send me a message
              </CardTitle>

              <p className="mt-2 text-sm text-white/50">
                Fill out the form below and I'll get back to you soon.
              </p>
            </CardHeader>

            <CardContent className="px-0 pb-0">
              <form className="mt-6 space-y-5">

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm text-white/70"
                    >
                      Full Name
                    </Label>

                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-white/30" />

                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="h-11 border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm text-white/70"
                    >
                      Email Address
                    </Label>

                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-white/30" />

                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="h-11 border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm text-white/70"
                  >
                    Phone Number
                    <span className="ml-1 text-white/30">
                      (Optional)
                    </span>
                  </Label>

                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-white/30" />

                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+855 12 345 678"
                      className="h-11 border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="text-sm text-white/70"
                  >
                    Subject
                  </Label>

                  <Input
                    id="subject"
                    type="text"
                    placeholder="Project discussion"
                    required
                    className="h-11 border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm text-white/70"
                  >
                    Message
                  </Label>

                  <div className="relative">
                    <FaCommentDots className="absolute left-3 top-3 text-sm text-white/30" />

                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="resize-none border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="group h-12 w-full rounded-xl bg-cyan-500 font-medium text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                >
                  Send Message

                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Button>

                <p className="text-center text-xs text-white/30">
                  I usually respond within 24 hours.
                </p>

              </form>
            </CardContent>
          </div>

        </div>
      </Card>
    </motion.div>
  )
}

