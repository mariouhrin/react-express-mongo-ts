import dotenv from 'dotenv-safe';

export default function() {
  try {
    dotenv.config({
      allowEmptyValues: true
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
