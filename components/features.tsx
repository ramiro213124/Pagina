import { Wifi, Smartphone, Droplets, Clock, Cloud, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Wifi,
    title: "Control Wi-Fi",
    description: "Conecta tu sistema a internet y contrólalo desde cualquier lugar del mundo",
  },
  {
    icon: Smartphone,
    title: "App Móvil",
    description: "Aplicación intuitiva para iOS y Android con control total de tu sistema",
  },
  {
    icon: Droplets,
    title: "Ahorro de Agua",
    description: "Optimiza el consumo de agua hasta un 50% con programación inteligente",
  },
  {
    icon: Clock,
    title: "Automatización",
    description: "Programa horarios y duraciones para cada zona de riego automáticamente",
  },
  {
    icon: Cloud,
    title: "Datos en la Nube",
    description: "Historial de riego y estadísticas almacenadas de forma segura",
  },
  {
    icon: Zap,
    title: "Instalación Rápida",
    description: "Configuración simple en minutos, sin necesidad de conocimientos técnicos",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Todo lo que necesitas en un solo sistema
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tecnología de punta diseñada para hacer tu vida más fácil y tu jardín más saludable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border bg-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
