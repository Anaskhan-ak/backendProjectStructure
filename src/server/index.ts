import app from './../app.ts';
import * as dotenv from "dotenv";  // ✅ Correct way in TypeScript

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});