import { useState } from "react";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import { toast } from "sonner";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData((prev) => (
      { ...prev, [e.target.name]: e.target.value }
    ))
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/massages", formData)

      console.log(res.status)
      toast.success("پیام شما با موفقیت ارسال شد")
      setFormData({ name: "", email: "", subject: "", message: "" })
    }
    catch (error) {
      console.log(error)
      toast.error("ارسال پیام با خطا مواجه شد")
    }
  }
  return (
    <div className="rounded-3xl border border-[#E8DFD2] bg-white p-5 shadow-sm sm:p-7 lg:p-9">
      <div className="mb-7">
        <span className="text-xs font-medium text-[#8B5E3C]">
          پیام شما
        </span>

        <h2 className="mt-2 font-morabba text-2xl text-[#2D2A26] sm:text-3xl">
          با ما در تماس باشید
        </h2>

        <p className="mt-2 text-sm leading-7 text-[#77716A]">
          فرم زیر را تکمیل کنید. پیام شما با دقت بررسی و در اولین فرصت
          پاسخ داده خواهد شد.
        </p>
      </div>

      <form onSubmit={submitHandler} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm text-[#4A4641]"
            >
              نام و نام خانوادگی
            </label>

            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              type="text"
              placeholder="مثلاً میلاد احمدی"
              className="
                w-full rounded-xl border border-[#E8DFD2]
                bg-[#FAF6EF]/60 px-4 py-3
                text-sm text-[#2D2A26]
                outline-none transition
                placeholder:text-[#A8A198]
                focus:border-[#0F766E]
                focus:ring-4 focus:ring-[#0F766E]/10
              "
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-[#4A4641]"
            >
              ایمیل
            </label>

            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="example@email.com"
              dir="ltr"
              className="
                w-full rounded-xl border border-[#E8DFD2]
                bg-[#FAF6EF]/60 px-4 py-3
                text-sm text-[#2D2A26]
                outline-none transition
                placeholder:text-[#A8A198]
                focus:border-[#0F766E]
                focus:ring-4 focus:ring-[#0F766E]/10
              "
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm text-[#4A4641]"
          >
            موضوع
          </label>

          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={changeHandler}
            type="text"
            placeholder="موضوع پیام شما"
            className="
              w-full rounded-xl border border-[#E8DFD2]
              bg-[#FAF6EF]/60 px-4 py-3
              text-sm text-[#2D2A26]
              outline-none transition
              placeholder:text-[#A8A198]
              focus:border-[#0F766E]
              focus:ring-4 focus:ring-[#0F766E]/10
            "
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm text-[#4A4641]"
          >
            پیام
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={changeHandler}
            rows="6"
            placeholder="پیام خود را اینجا بنویسید..."
            className="
              w-full resize-none rounded-xl
              border border-[#E8DFD2]
              bg-[#FAF6EF]/60 px-4 py-3
              text-sm leading-7 text-[#2D2A26]
              outline-none transition
              placeholder:text-[#A8A198]
              focus:border-[#0F766E]
              focus:ring-4 focus:ring-[#0F766E]/10
            "
          />
        </div>

        <button
          type="submit"
          className="
            inline-flex w-full items-center justify-center gap-2
            rounded-xl bg-[#0F766E]
            px-6 py-3.5
            text-sm font-medium text-white
            transition-all duration-300
            hover:bg-[#095F59]
            hover:shadow-lg hover:shadow-[#0F766E]/20
            active:scale-[0.98]
            sm:w-auto
          "
        >
          <span>ارسال پیام</span>
          <FiSend className="text-base" />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;