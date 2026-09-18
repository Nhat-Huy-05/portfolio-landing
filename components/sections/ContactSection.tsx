"use client"

import * as React from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2
} from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card"

export default function ContactSection() {
  const { contact } = portfolioConfig
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate reliable submission without page reload
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 800)
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-3">
            Liên hệ
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {contact.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Form */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Left: Contact Info (2 cols) */}
          <div className="flex flex-col gap-6 md:col-span-2">
            <Card className="flex flex-col gap-6 p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-bold">
                  Thông tin kết nối
                </CardTitle>
                <CardDescription className="text-xs">
                  {contact.responseTime}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-5 p-0">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Thư điện tử
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Điện thoại
                    </p>
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Khu vực làm việc
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {contact.location}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Thời gian phản hồi
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {contact.workingHours}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Contact Form (3 cols) */}
          <div className="md:col-span-3">
            <Card className="p-6">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-xl font-bold">
                  Gửi tin nhắn trực tiếp
                </CardTitle>
                <CardDescription className="text-xs">
                  Điền thông tin bên dưới để kết nối với tôi ngay hôm nay.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle className="size-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      Đã gửi tin nhắn thành công!
                    </h3>
                    <p className="max-w-sm text-sm text-muted-foreground">
                      Cảm ơn bạn đã liên hệ. Tôi sẽ xem xét và phản hồi qua email của bạn trong thời gian sớm nhất.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-2"
                    >
                      Gửi tin nhắn khác
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="name"
                          className="text-xs font-medium text-foreground"
                        >
                          Họ và tên <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Nguyễn Văn A"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="email"
                          className="text-xs font-medium text-foreground"
                        >
                          Địa chỉ Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="example@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="subject"
                        className="text-xs font-medium text-foreground"
                      >
                        Tiêu đề <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        placeholder="Trao đổi về cơ hội hợp tác / dự án mới..."
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="message"
                        className="text-xs font-medium text-foreground"
                      >
                        Nội dung tin nhắn <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Chi tiết về dự án, yêu cầu kỹ thuật hoặc câu hỏi của bạn..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 w-full gap-2 sm:w-auto self-end"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          <span>Đang gửi...</span>
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          <span>Gửi tin nhắn</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
