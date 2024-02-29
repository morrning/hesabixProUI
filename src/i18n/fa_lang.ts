import { fa } from 'vuetify/locale'
const fa_lang = {
  $vuetify: {
    ...fa,
  },
  static:{
    not_found: "صفحه مورد نظر یافت نشد",
    logout_loading: "در حال خروج ..."
  },
  dialog:{
    ok: "قبول",
    cancel: "بازگشت",
    save: "ثبت",
    active_account:"فعال سازی"
  },
  app:{
    name:"حسابیکس",
    loading:"در حال بارگزاری...",
    please_wait: "لطفا صبر کنید ...",
    logout: "خروج",
    profile: "داشبورد کاربری"
  },
  user:{
    name:"نام و نام خانوادگی",
    name_des:"مثلا علی باقری",
    password_register_des:"کلمه عبور باید بیشتر از ۱۰ کاراکتر و ترکیبی از اعداد و حروف باشد",
    login_label:"ورود به حسابیکس",
    register_label:"عضویت در حسابیکس",
    login:"ورود",
    email_placeholder:"پست الکترونیکی خود را وارد کنید",
    email:"پست الکترونیکی",
    password_placeholder:"کلمه عبور را وارد کنید",
    password:"کلمه عبور",
    forget_password_des:"برای بازیابی کلمه عبور اینجا کلیک کنید.",
    register:"عضویت",
    forget_password:"بازیابی کلمه عبور",
    forget_password_sended: "کد بازیابی کلمه عبور به شماره تلفن شما ارسال شد",
    password_sended: "کلمه عبور جدید به شماره تلفن شما ارسال شد.",
    mobile_placeholder:"مثلا 09121234567",
    mobile:"تلفن همراه",
    send_new_password: "ارسال کلمه عبور جدید",
    editNumber: "ویرایش شماره",
    resendCodeLabel: "ارسال مجدد",
    resendCode: "کد فعال سازی مجددا ارسال شد.",
    your_phone_number: " شماره تلفن شما: {mobile}",
    active_account:"فعال سازی حساب کاربری",
    send_again: "ارسال مجدد",
    businesses: "کسب‌و‌کارها",
    new_business: "کسب‌و‌کار جدید",
    tickets:"پشتیبانی",
    manager:"مدیریت",
    change_password:"تغییر کلمه عبور",
    notifications: "اعلانات",
    invoices: "صورت‌حساب‌ها",
    send_code_forget_password: "ارسال کد بازیابی",
    number_edited: "شماره تلفن با موفقیت تغییر یافت . کد فعال سازی جدید به شماره شما ارسال شد",
    register_terms_des:"عضویت در حسابیکس به معنای قبول شرایط و مقررات استفاده از آن است.برای مشاهده متن توافقنامه به صفحه نخست مراجعه نمایید"
  },
  login:{
    des:"برای ورود به حسابیکس نام کاربری و کلمه عبور خود را وارد کنید.در صورتی که هنوز عضو نیستید با کلیک بر روی دکمه عضویت و برای بازیابی کلمه عبور از دکمه فراموشی کلمه عبور استفاده نمایید."
  },
  validator:{
    required:"الزامی است!",
    email_not_valid:"پست الکترونیکی معتبر نیست",
    password_len_lower:"طول کلمه عبور کم است",
    mobile_not_valid:"شماره موبایل معتبر نیست",
  },
  hesabix:{
    banner:"حسابیکس سامانه جامع مدیریت مالی"

  },
  title:{
    user:{
      dashboard: "پروفایل کاربر",
      businesses: "کسب‌و‌کارها",
      business_create: "ایجاد کسب و کار جدید",
    }
  },
  pages:{
    reset_password:{
      form_not_valid: "اطلاعات به درستی وارد نشده است",
      passwords_not_match: "کلمات عبور وارد شده مطابق نیستند!",
      password_changed: "کلمه عبور تغییر یافت"
    },
    create_business:{
      info:"اطلاعات کسب و کار",
      financial_settings:"تنظیمات مالی",
      preview:"پیش نمایش",
      business_name: "نام کسب و کار",
      country:"کشور",
      address:"آدرس",
      moneys:"واحد‌های پولی",
      moneys_hint:"واحد های پولی انتخاب شده در آینده قابل حذف نیستند!",
      shamsi:"هجری شمسی",
      gregorian:"میلادی",
      ghamari:"هجری قمری",
      calender:"تقویم",
      fiscal_year:"سال مالی",
    }
  }
};
export default fa_lang
