import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("quienes-somos", "routes/quienes-somos.tsx"),
  route("nuestra-experiencia", "routes/nuestra-experiencia.tsx"),
  route("tratamientos", "routes/tratamientos.tsx"),
  route("como-funciona-tu-tratamiento", "routes/como-funciona-tu-tratamiento.tsx"),
  route("pacientes-foraneos", "routes/pacientes-foraneos.tsx"),
  route("preguntas-frecuentes", "routes/preguntas-frecuentes.tsx"),
  route("contacto", "routes/contacto.tsx"),
] satisfies RouteConfig;
