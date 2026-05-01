import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  price: z.coerce.number(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string(),
});



// ในโปรเจกต์ที่มี react-hook-form มักจะใช้คู่กับ Zod (ผ่านตัวเชื่อมที่ชื่อว่า zodResolver) 
// เพื่อให้ฟอร์มรู้ว่าต้องเช็คข้อมูลจาก Schema ตัวนี้นะ 
// ทำให้การจัดการ Error Message อัตโนมัติและง่ายขึ้นมากครับ
// เราสร้างไฟล์ schemas.jsx (หรือ .js) 
// และใช้ไลบรารีอย่าง Zod (import { z } from "zod") 
// เพื่อทำหน้าที่เป็น "คนตรวจคนเข้าเมือง (Validator)" ของข้อมูลครับ 
// 
// โดยมีเหตุผลหลักๆ ดังนี้ครับ:

// 1. กำหนดกฎเกณฑ์ความถูกต้อง (Validation Rules)
// เราใช้ไฟล์นี้เพื่อเขียน "กฎ" ว่าข้อมูลที่กรอกเข้ามาในฟอร์มต้องมีหน้าตาแบบไหน 
// ก่อนที่จะยอมให้ส่งไปหลังบ้าน (Database) เช่น:

// title: ต้องเป็นตัวอักษร และมีความยาวอย่างน้อย 3 ตัวอักษร ถ้าไม่ถึงให้ด่าว่า "Title must be at least 3 characters"
// price: ต้องเป็นตัวเลขเท่านั้น (z.coerce.number() จะช่วยแปลงข้อความตัวเลขให้เป็น Number อัตโนมัติ)
// ถ้าผู้ใช้กรอกผิดตามกฎนี้ ระบบฟอร์มจะหยุดการส่งข้อมูลทันที และแสดงแจ้งเตือน (Error Message) ขึ้นมา