import { motion } from "framer-motion";
import { useEffect } from "react";
import { DisciplineCard } from "./components/DisciplineCard";
import { Zap, Star, Check, Waves, PersonStanding, Medal, GraduationCap, Baby, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaWhatsapp, FaVolleyballBall } from "react-icons/fa";
import logo from "./assets/logo-tricool.png";
import gallery1 from "./assets/gallery-1.jpeg";
import gallery2 from "./assets/gallery-2.jpeg";
import gallery3 from "./assets/gallery-3.jpeg";
import gallery4 from "./assets/gallery-4.jpeg";
import gallery5 from "./assets/gallery-5.jpeg";
import gallery6 from "./assets/gallery-6.jpeg";
import gallery7 from "./assets/gallery-7.jpeg";
import gallery8 from "./assets/gallery-8.jpeg";
import hero1 from "./assets/hero-1.jpeg";
import hero2 from "./assets/hero-2.jpeg";


export default function LandingPage() {
    const stats = [
        { label: "Años de experiencia", value: 90, text: "10+" },
        { label: "Atletas activos", value: 75, text: "150+" },
        { label: "Medallas ganadas", value: 60, text: "50+" },
    ];

    const heroImages = [hero1, hero2];
    const [heroIndex, setHeroIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000); // change every 4s

        return () => clearInterval(interval);
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        discipline: "",
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
                    discipline: formData.discipline,
                    level: formData.level,
                    message: formData.message,
                },
                "mAP4MA4ns-r3Gkvid"
            );

            alert("Mensaje enviado correctamente 🚀");

            setFormData({
                name: "",
                email: "",
                discipline: "",
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
        <div className="min-h-screen w-full bg-[#0b1220] flex flex-col overflow-x-hidden antialiased">

            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 w-full z-50 bg-[#0b122b]/80 backdrop-blur-xl border-b border-white/10"
            >
                <div className="max-w-[2560px] w-full mx-auto px-6 sm:px-10 xl:px-24 2xl:px-40">
                    <div className="navbar w-full text-white">

                        {/* ================= MOBILE NAVBAR ================= */}
                        <div className="flex w-full items-center justify-between lg:hidden">

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

                            <a href="#home" className="flex items-center gap-2">
                                <img src={logo} alt="Tricool Logo" className="h-9 w-auto brightness-110 drop-shadow-lg transition" />
                            </a>
                        </div>

                        {/* ================= DESKTOP NAVBAR ================= */}
                        <div className="hidden lg:flex w-full items-center">

                            <div className="navbar-start">
                                <a href="#home" className="flex items-center gap-3">
                                    <img src={logo} alt="Tricool Logo" className="h-9 w-auto brightness-110 drop-shadow-lg transition" />
                                </a>
                            </div>

                            <div className="navbar-center">
                                <ul className="menu menu-horizontal gap-10 font-medium">
                                    <li><a href="#home">Inicio</a></li>
                                    <li><a href="#about">Conócenos</a></li>
                                    <li><a href="#disciplines">Disciplinas</a></li>
                                </ul>
                            </div>

                            <div className="navbar-end">
                                <a
                                    href="#contact"
                                    className="px-7 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 font-semibold transition"
                                >
                                    Contacto
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </motion.nav>

            {/* Hero */}
            <section id="home" className="relative min-h-screen text-white flex items-center overflow-hidden">

                <div className="absolute inset-0">
                    {heroImages.map((img, i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: i === heroIndex ? 0.98 : 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b122b] via-[#0b122b]/85 to-[#0b122b]/60" />

                <div className="relative z-10 w-full max-w-[2560px] mx-auto
          px-6 sm:px-10 xl:px-24 2xl:px-40
          pt-32 pb-24
          grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3
          gap-16 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center
    lg:text-left
    2xl:text-center

    mx-auto
    lg:mx-0
    2xl:mx-auto

    max-w-xl
    lg:max-w-2xl
    2xl:max-w-4xl

    2xl:col-span-3"
                    >
                        <span className="uppercase text-xm tracking-widest text-blue-400 font-bold">
                            Club Deportivo Tricool
                        </span>

                        <motion.h1
                            className="mt-6 text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight font-display"
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
                            className="mt-6 sm:mt-8 text-gray-300 text-base sm:text-lg leading-relaxed font-sans"
                        >
                            Encuentra tu entrenador, comienza un plan, imagina en quién te convertirás.
                        </motion.p>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-10
    max-w-lg 2xl:max-w-5xl
    2xl:col-span-3
    2xl:mx-auto"
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-5">
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
                                    Promover la formación integral de sus socios y deportistas, fomentando la práctica
                                    del deporte en distintas disciplinas (triatlón, natación, running, ciclismo, voleibol y
                                    aquellas que se incorporen en el futuro).
                                </motion.p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-5">
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
                <div className="max-w-[2560px] mx-auto px-6 sm:px-10 xl:px-24 2xl:px-40">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center text-blue-400 uppercase tracking-widest mb-4 font-bold"
                    >
                        Nuestra Historia
                    </motion.p>


                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center text-5xl md:text-6xl font-extrabold font-display">
                        El Ecosistema de{" "}
                        <span className="text-blue-500">Entrenamiento</span> Total
                    </motion.h2>
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
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-3xl font-bold mb-6">
                                Más que un club, una comunidad
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-gray-400 leading-relaxed mb-6 text-justify"
                            >Tricool nace como un club familiar. Sus buenos resultados en competencias
                                de atletismo a nivel regional y nacional motivaron para buscar nuevos horizontes e
                                incursionar en la práctica del Triatlón.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                                className="text-gray-400 leading-relaxed mb-6 text-justify"
                            >Nuestro equipo de entrenadores certificados combina experiencia profesional con una metodología personalizada, asegurando que cada miembro alcance su máximo potencial en natación, ciclismo y carrera.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex flex-wrap justify-center gap-8 p-6 mb-16">

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

                            </motion.div>
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

            {/* Photo Carousel */}
            <section className="bg-[#0b122b] py-20 text-white overflow-hidden">
                <div className="max-w-[2560px] mx-auto px-6 sm:px-10 xl:px-24 2xl:px-40">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <p className="text-blue-400 uppercase tracking-widest mb-4 font-bold">
                            Nuestra Comunidad
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold font-display">
                            Momentos <span className="text-blue-500">Tricool</span>
                        </h2>
                        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                            Entrenamientos, competencias y la energía que nos mueve.
                        </p>
                    </motion.div>

                    {/* Carousel */}
                    <div className="relative">
                        <motion.div
                            className="flex gap-6"
                            drag="x"
                            dragConstraints={{ left: -2000, right: 0 }}
                            whileTap={{ cursor: "grabbing" }}
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 10,
                                ease: "linear",
                            }}
                        >
                            {[...[
                                gallery1,
                                gallery2,
                                gallery3,
                                gallery4,
                                gallery5,
                                gallery6,
                                gallery7,
                                gallery8,
                            ], ...[
                                gallery1,
                                gallery2,
                                gallery3,
                                gallery4,
                                gallery5,
                                gallery6,
                                gallery7,
                                gallery8,
                            ]].map((img, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="
                            min-w-[260px] sm:min-w-[340px] lg:min-w-[420px]
                            h-[360px]
                            relative overflow-hidden rounded-3xl
                            bg-white/5 backdrop-blur-xl
                            border border-white/10
                            hover:border-blue-400/40
                            hover:shadow-[0_20px_45px_-15px_rgba(59,130,246,0.45)]
                            transition-all
                        "
                                >
                                    <img
                                        src={img}
                                        alt={`Galería Tricool ${i + 1}`}
                                        className="
                                absolute inset-0 w-full h-full object-cover
                                transition-transform duration-700
                                hover:scale-110
                            "
                                    />

                                    {/* Overlay */}
                                    <div className="
                            absolute inset-0
                            bg-gradient-to-t from-[#0b122b]/70 via-transparent to-transparent
                        " />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Disciplines */}
            <section id="disciplines" className="bg-[#0b122b] py-6 text-white">
                <div className="max-w-[2560px] mx-auto px-6 sm:px-10 xl:px-24 2xl:px-40">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center text-blue-400 uppercase tracking-widest mb-4 font-bold">
                        Ramas Deportivas
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center text-5xl md:text-6xl font-extrabold mb-20">
                        Nuestras <span className="text-blue-500">Disciplinas</span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-justify">

                        {/* Triatlón */}
                        <DisciplineCard
                            title="Triatlón"
                            description="Entrenamiento integral combinando natación, ciclismo y carrera."
                            icon={<Medal size={28} />}
                            items={[
                                "Planes integrados",
                                "Preparación competitiva",
                                "Enfoque por objetivos",
                            ]}
                            gradient="from-blue-500 to-indigo-600"
                            border="border-blue-500/60"
                            glow="bg-blue-500"
                            delay={0}
                        />

                        {/* Natación */}
                        <DisciplineCard
                            title="Natación"
                            description="Perfecciona tu técnica en piscina y aguas abiertas."
                            icon={<Waves size={28} />}
                            items={[
                                "Técnica de crawl",
                                "Aguas abiertas",
                                "Resistencia",
                            ]}
                            gradient="from-cyan-400 to-blue-500"
                            border="border-cyan-400/60"
                            glow="bg-cyan-400"
                            delay={0.1}
                        />

                        {/* Running */}
                        <DisciplineCard
                            title="Running"
                            description="Corre con técnica, velocidad y control de carga."
                            icon={<PersonStanding size={28} />}
                            items={[
                                "Series y fartlek",
                                "Prevención de lesiones",
                                "Técnica de carrera",
                            ]}
                            gradient="from-pink-500 to-red-500"
                            border="border-pink-500/60"
                            glow="bg-pink-500"
                            delay={0.2}
                        />

                        {/* Tricool Academy */}
                        <DisciplineCard
                            title="Academia Tricool"
                            description="Formación deportiva y personal desde la base."
                            icon={<GraduationCap size={28} />}
                            items={[
                                "Desarrollo integral",
                                "Valores deportivos",
                                "Proyección a largo plazo",
                            ]}
                            gradient="from-purple-500 to-fuchsia-600"
                            border="border-purple-500/60"
                            glow="bg-purple-500"
                            delay={0.3}
                        />

                        {/* Vóleibol Femenino */}
                        <DisciplineCard
                            title="Vóleibol Femenino"
                            description="Entrenamiento técnico y táctico en equipo."
                            icon={<FaVolleyballBall size={26} />}
                            items={[
                                "Trabajo en equipo",
                                "Fuerza y coordinación",
                                "Competencia local",
                            ]}
                            gradient="from-rose-500 to-pink-600"
                            border="border-rose-500/60"
                            glow="bg-rose-500"
                            delay={0.4}
                        />

                        {/* Triatlón Kids */}
                        <DisciplineCard
                            title="Triatlón Kids"
                            description="Iniciación deportiva divertida y segura para niños."
                            icon={<Baby size={28} />}
                            items={[
                                "Aprendizaje lúdico",
                                "Coordinación motriz",
                                "Hábitos saludables",
                            ]}
                            gradient="from-lime-400 to-emerald-500"
                            border="border-lime-400/60"
                            glow="bg-lime-400"
                            delay={0.5}
                        />

                    </div>
                </div>
            </section>


            {/* Contact */}
            <section
                id="contact"
                className="bg-gradient-to-b from-[#0b122b] to-[#050812] py-16 text-white"
            >
                <div className="max-w-[2560px] mx-auto px-6 sm:px-10 xl:px-24 2xl:px-40">

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
                                            tricoolchile@gmail.com
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                                            <Phone size={16} className="text-blue-400" />
                                        </span>
                                        <span className="font-medium text-white">
                                            +56 9 8888 3966
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
                                            icon: FaWhatsapp,
                                            href: "https://api.whatsapp.com/send?phone=56988883966",
                                            label: "Whatsapp",
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
                                            Disciplina
                                        </label>
                                        <select
                                            name="discipline"
                                            value={formData.discipline}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-xl bg-[#0b122b] border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"
                                        >
                                            <option value="">Selecciona la disciplina que deseas</option>
                                            <option>Triatlón</option>
                                            <option>Natación</option>
                                            <option>Running</option>
                                            <option>Academia Tricool</option>
                                            <option>Vóleibol Femenino</option>
                                            <option>Triatlon Kids</option>
                                        </select>
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
                <div className="max-w-[2560px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

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
