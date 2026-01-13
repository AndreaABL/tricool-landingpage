import { motion } from "framer-motion";
import { DisciplineCard } from "./components/DisciplineCard";
import { Zap, Star, Check, Waves, Bike, PersonStanding, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "./assets/logo-tricool.png";


export default function LandingPage() {
    const stats = [
        { label: "Años de experiencia", value: 90, text: "10+" },
        { label: "Atletas activos", value: 75, text: "150+" },
        { label: "Medallas ganadas", value: 60, text: "50+" },
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        level: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                "service_k0k8qkq",
                "template_todnffx",
                {
                    name: formData.name,
                    reply_to: formData.email,
                    level: formData.level,
                    message: formData.message,
                },
                "mAP4MA4ns-r3Gkvid"
            );

            alert("Mensaje enviado correctamente 🚀");

            setFormData({
                name: "",
                email: "",
                level: "",
                message: ""
            });
        } catch (error) {
            console.error("EmailJS error:", error);
            alert("Error al enviar el mensaje 😢");
        } finally {
            setLoading(false);
        }
    };
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { ease: "easeOut", duration: 0.4 },
        },
    };

    return (
        <div className="min-h-screen w-full bg-[#0b1220] flex flex-col overflow-x-hidden">

            {/* Navbar */}
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 w-full z-50 bg-[#0b122b]/80 backdrop-blur-xl border-b border-white/10"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="navbar w-full text-white px-6">

                        {/* ================= MOBILE NAVBAR ================= */}
                        <div className="flex w-full items-center justify-between lg:hidden">

                            {/* Menu button */}
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h12m-12 6h16"
                                        />
                                    </svg>
                                </label>

                                <ul
                                    tabIndex={0}
                                    className="dropdown-content fixed top-20 left-6 w-72 rounded-2xl
        bg-[#0b122b]/95 backdrop-blur-xl shadow-2xl border border-white/10
        p-6 space-y-4 z-50"
                                >
                                    <li><a href="#home">Inicio</a></li>
                                    <li><a href="#about">Conócenos</a></li>
                                    <li><a href="#disciplines">Disciplinas</a></li>
                                    <li><a href="#contact">Contacto</a></li>
                                </ul>
                            </div>

                            {/* Mobile logo */}
                            <a href="#home" className="flex items-center gap-2">
                                <img src={logo} alt="Tricool Logo" className="h-9 w-auto
    brightness-110
    drop-shadow-[0_0_6px_rgba(56,189,248,0.45)]
    drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]
    transition" />
                            </a>
                        </div>

                        {/* ================= DESKTOP NAVBAR ================= */}
                        <div className="hidden lg:flex w-full items-center">

                            {/* LEFT — Brand */}
                            <div className="navbar-start">
                                <a href="#home" className="flex items-center gap-3">
                                    <img src={logo} alt="Tricool Logo" className="h-9 w-auto
    brightness-110
    drop-shadow-[0_0_6px_rgba(56,189,248,0.45)]
    drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]
    transition" />
                                </a>
                            </div>

                            {/* CENTER — Menu */}
                            <div className="navbar-center">
                                <ul className="menu menu-horizontal gap-10 font-medium">
                                    <li><a href="#home">Inicio</a></li>
                                    <li><a href="#about">Conócenos</a></li>
                                    <li><a href="#disciplines">Disciplinas</a></li>
                                </ul>
                            </div>

                            {/* RIGHT — CTA */}
                            <div className="navbar-end">
                                <a
                                    href="#contact"
                                    className="px-7 py-2.5 rounded-2xl bg-blue-600
        hover:bg-blue-500 font-semibold transition"
                                >
                                    Contacto
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </motion.nav>

            {/* Hero */}
            <section id="home" className="relative min-h-screen text-white flex items-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=2000&q=80')"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b122b] via-[#0b122b]/85 to-[#0b122b]/60" />

                {/* CONTENT — pulled slightly toward center */}
                <div className="relative z-10 w-full max-w-6xl mx-auto px-10 pt-24 pb-20 gap-12 grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT – HERO TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-left max-w-xl"
                    >
                        <span className="uppercase text-xm tracking-widest text-blue-400 font-bold">
                            Club Deportivo Tricool
                        </span>

                        <motion.h1
                            className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight font-display"
                            variants={sentence}
                            initial="hidden"
                            animate="visible"
                        >
                            {"Esta es Tu ".split("").map((char, i) => (
                                <motion.span key={i} variants={letter}>
                                    {char}
                                </motion.span>
                            ))}

                            <span className="text-blue-500">
                                {"Temporada".split("").map((char, i) => (
                                    <motion.span key={i} variants={letter}>
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="mt-8 text-gray-300 text-lg leading-relaxed font-sans"
                        >Encuentra tu entrenador, comienza un plan, imagina en quién te convertirás.
                        </motion.p>


                    </motion.div>

                    {/* RIGHT – MISSION & VISION */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-10 max-w-lg"
                    >
                        {/* Mission */}
                        <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 gap-8">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                                <Zap size={200} strokeWidth={1} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Misión</h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="text-gray-300 text-sm leading-relaxed"
                                >
                                    Formar atletas integrales, promoviendo el triatlón como estilo de vida saludable y competitivo.
                                </motion.p>


                            </div>
                        </div>

                        {/* Vision */}
                        <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 gap-8">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                                <Star size={200} strokeWidth={1} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Visión</h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="text-gray-300 text-sm leading-relaxed"
                                >
                                    Ser el club de triatlón referente en la región, desarrollando campeones con valores deportivos.
                                </motion.p>

                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* About */}
            <section id="about" className="bg-[#0b122b] py-10 text-white">
                <div className="max-w-7xl mx-auto px-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center text-blue-400 uppercase tracking-widest mb-4 font-bold"
                    >
                        Nuestra Historia
                    </motion.p>


                    <h2 className="text-center text-5xl md:text-6xl font-extrabold font-display">
                        El Ecosistema de{" "}
                        <span className="text-blue-500">Entrenamiento</span> Total
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center mt-6 text-lg text-gray-400 max-w-3xl mx-auto"
                    >Todas las partes del entrenamiento pueden parecer dispersas.
                        Tricool las une en un solo lugar.
                    </motion.p>


                    <div className="mt-10 flex flex-col items-center text-center">

                        {/* Text */}
                        <div className="max-w-3xl">
                            <h3 className="text-3xl font-bold mb-6">
                                Más que un club, una comunidad
                            </h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-gray-400 leading-relaxed mb-6 text-justify"
                            >Fundado por apasionados del triatlón, Tricool nació
                                con el objetivo de crear un espacio donde atletas de
                                todos los niveles pudieran entrenar, crecer y superar
                                sus límites juntos.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                                className="text-gray-400 leading-relaxed mb-6 text-justify"
                            >Nuestro equipo de entrenadores certificados combina experiencia profesional con una metodología personalizada, asegurando que cada miembro alcance su máximo potencial en natación, ciclismo y carrera.
                            </motion.p>

                            <div className="flex flex-wrap justify-center gap-8 p-6 mb-16">

                                {[
                                    "Entrenadores certificados",
                                    "Grupos por nivel",
                                    "Planes personalizados"
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm"
                                    >
                                        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-400/20 text-blue-400 text-xs">
                                            <Check size={12} />
                                        </span>

                                        {item}
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {stats.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    whileHover={{ y: -10, scale: 1.04 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: i * 0.15
                                    }}
                                    className="
                                        group relative
                                        rounded-2xl p-6
                                        flex flex-col items-center gap-4
                                        bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-indigo-500/10
                                        border border-white/10
                                        hover:border-blue-400/40
                                        hover:shadow-[0_20px_45px_-15px_rgba(59,130,246,0.45)]
                                        transition-all
                                        cursor-pointer
                                    "
                                >
                                    {/* Glow */}
                                    <div className="
                                        absolute inset-0 rounded-2xl
                                        bg-gradient-to-br from-blue-500/25 via-cyan-400/25 to-indigo-500/25
                                        opacity-0 blur-xl
                                        group-hover:opacity-100
                                        transition-opacity
                                    " />

                                    <div className="relative w-28 h-28 z-10">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                            <defs>
                                                <linearGradient id={`bgGradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#1e293b" />
                                                    <stop offset="100%" stopColor="#020617" />
                                                </linearGradient>

                                                <linearGradient id={`strokeGradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#38bdf8" />
                                                    <stop offset="50%" stopColor="#3b82f6" />
                                                    <stop offset="100%" stopColor="#6366f1" />
                                                </linearGradient>
                                            </defs>

                                            <path
                                                d="M18 2.0845
                                                   a 15.9155 15.9155 0 0 1 0 31.831
                                                   a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke={`url(#bgGradient-${i})`}
                                                strokeWidth="3"
                                            />

                                            <motion.path
                                                d="M18 2.0845
                                                   a 15.9155 15.9155 0 0 1 0 31.831
                                                   a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke={`url(#strokeGradient-${i})`}
                                                strokeWidth="3"
                                                strokeDasharray={`${item.value}, 100`}
                                                initial={{ strokeDasharray: "0, 100" }}
                                                whileInView={{ strokeDasharray: `${item.value}, 100` }}
                                                transition={{ duration: 1.3, ease: "easeOut" }}
                                            />
                                        </svg>

                                        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                                            {item.text}
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-400">
                                        {item.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Disciplines */}
            <section id="disciplines" className="bg-[#0b122b] py-6 text-white">
                <div className="max-w-7xl mx-auto px-8">
                    <p className="text-center text-blue-400 uppercase tracking-widest mb-4 font-bold">
                        Ramas Deportivas
                    </p>

                    <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-20">
                        Nuestras <span className="text-blue-500">Disciplinas</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 text-justify [&>*]:scale-80">
                        {/* Natación */}
                        <DisciplineCard
                            title="Natación"
                            description="Domina el agua con técnica perfecta. Entrenamos en piscina y aguas abiertas."
                            icon={<Waves />}
                            items={["Técnica de crawl", "Aguas abiertas", "Resistencia"]}
                            gradient="from-cyan-400 to-blue-500"
                            border="border-cyan-400/60"
                            glow="bg-cyan-400"
                            delay={0}
                        />

                        {/* Ciclismo */}
                        <DisciplineCard
                            title="Ciclismo"
                            description="Conquista kilómetros con potencia y estrategia. Rutas grupales y entrenamiento indoor."
                            icon={<Bike />}
                            items={["Rutas en grupo", "Entrenamiento indoor", "Técnica de pedaleo"]}
                            gradient="from-emerald-400 to-green-500"
                            border="border-emerald-400/60"
                            glow="bg-emerald-400"
                            delay={0.15}
                        />

                        {/* Carrera */}
                        <DisciplineCard
                            title="Carrera"
                            description="Corre hacia tus metas con técnica y velocidad. Planes personalizados para cada nivel."
                            icon={<PersonStanding />}
                            items={["Series y fartlek", "Técnica de carrera", "Preparación mental"]}
                            gradient="from-pink-500 to-red-500"
                            border="border-pink-500/60"
                            glow="bg-pink-500"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section
                id="contact"
                className="bg-gradient-to-b from-[#0b122b] to-[#050812] py-16 text-white"
            >
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <p className="text-center text-blue-400 uppercase tracking-widest mb-4 font-bold">
                            Únete al equipo
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold font-display">
                            Comienza Tu <span className="text-blue-500">Aventura</span>
                        </h2>
                    </motion.div>

                    {/* Framed Content */}
                    <div className="border-l border-r border-white/10 px-8 lg:px-12">

                        <div className="grid lg:grid-cols-2 gap-12 items-start">

                            {/* LEFT INFO */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8 max-w-lg"
                            >
                                <div>
                                    <h3 className="text-center text-blue-400 uppercase tracking-widest mb-4 font-bold">
                                        ¿Tienes preguntas?
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Estamos aquí para ayudarte a dar el primer paso.
                                        Contáctanos y te guiaremos en tu camino hacia el triatlón.
                                    </p>
                                </div>

                                {/* Contact info */}
                                <div className="space-y-4 text-sm text-gray-300">
                                    <div className="flex items-center gap-3">
                                        <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                                            <Mail size={16} className="text-blue-400" />
                                        </span>
                                        <span className="font-medium text-white">
                                            info@tricool.club
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                                            <Phone size={16} className="text-blue-400" />
                                        </span>
                                        <span className="font-medium text-white">
                                            +56 9 9855 2491
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                                            <MapPin size={16} className="text-blue-400" />
                                        </span>
                                        <span className="font-medium text-white">
                                            Talca, Región del Maule, Chile
                                        </span>
                                    </div>
                                </div>

                                {/* Social icons */}
                                <div className="flex justify-center gap-4 pt-6">
                                    {[
                                        {
                                            icon: FaInstagram,
                                            href: "https://www.instagram.com/tricoolchile/",
                                            label: "Instagram",
                                        },
                                        {
                                            icon: FaFacebookF,
                                            href: "https://facebook.com/tuclub",
                                            label: "Facebook",
                                        },
                                    ].map(({ icon: Icon, href, label }, i) => (
                                        <motion.a
                                            key={i}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            whileHover={{ scale: 1.15, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-blue-500/20 transition"
                                        >
                                            <Icon size={20} />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* FORM */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-[#0f1733]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
                            >
                                <form className="space-y-5" onSubmit={handleSubmit}>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Tu nombre"
                                                className="w-full px-4 py-2.5 rounded-xl bg-[#0b122b] border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="tu@email.com"
                                                className="w-full px-4 py-2.5 rounded-xl bg-[#0b122b] border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1">
                                            Nivel de experiencia
                                        </label>
                                        <select
                                            name="level"
                                            value={formData.level}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-xl bg-[#0b122b] border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"
                                        >
                                            <option value="">Selecciona tu nivel</option>
                                            <option>Principiante</option>
                                            <option>Intermedio</option>
                                            <option>Avanzado</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1">
                                            Mensaje
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={3}
                                            required
                                            placeholder="Cuéntanos sobre ti y tus objetivos..."
                                            className="w-full px-4 py-2.5 rounded-xl bg-[#0b122b] border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-sm text-white disabled:opacity-50"
                                    >
                                        {loading ? "Enviando..." : "Enviar mensaje"}
                                    </button>

                                </form>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-[#0b1220] py-8 text-gray-400">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src={logo} // or "/logo.png"
                            alt="Tricool Logo"
                            className="
          h-9 w-auto
    brightness-110
    drop-shadow-[0_0_6px_rgba(56,189,248,0.45)]
    drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]
    transition
        "
                        />
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-center text-gray-500">
                        © 2026 Tricool Club de Triatlón. Todos los derechos reservados.
                    </p>

                </div>
            </footer>

        </div>
    );
}
