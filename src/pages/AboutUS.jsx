import Container from "../components/common/container";
import aboutUs from "../assets/aboutUs/aboutUs.png";
import { Accordion } from "../components/common/Acoordion";
import { aboutUsData } from "../data/aboutUsData";

function AboutUS() {
  return (
    <Container>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

        {/* محتوا */}
        <div className="min-w-0">
          <h1 className="font-morabba text-3xl font-bold text-primary" >
            ما کی هستیم؟
          </h1>

          <p className="mt-4 leading-8 text-gray-600">
            ما یک فروشگاه کتاب هستیم که می‌توانید ما را در فضای مجازی و
            حضوری دنبال کنید. تلاش می‌کنیم سفارش‌های شما را در سریع‌ترین
            زمان ممکن آماده و ارسال کنیم.
          </p>

          <div className="mt-8">
            <Accordion options={aboutUsData} />
          </div>
        </div>

        {/* تصویر */}
        <div className="flex w-full items-start justify-center lg:mt-12">
          <img
            src={aboutUs}
            alt="درباره کتاب‌فروشی راوی"
            className="w-full max-w-none object-contain"
          />
        </div>

      </div>
    </Container>
  );
}

export default AboutUS;