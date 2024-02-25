import { fa } from 'vuetify/locale'
const fa_lang = {
  $vuetify: {
    ...fa,
  },
  static:{
    not_found: "صفحه مورد نظر یافت نشد"
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
    please_wait: "لطفا صبر کنید ..."
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
    mobile_placeholder:"مثلا 09121234567",
    mobile:"تلفن همراه",
    editNumber: "ویرایش شماره",
    resendCodeLabel: "ارسال مجدد",
    resendCode: "کد فعال سازی مجددا ارسال شد.",
    your_phone_number: " شماره تلفن شما: {mobile}",
    active_account:"فعال سازی حساب کاربری",
    send_again: "ارسال مجدد",
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
  }
};
export default fa_lang
