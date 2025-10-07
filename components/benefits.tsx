import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Control total desde tu celular (Android / iOS)",
  "Control manual o automático desde cualquier parte del mundo",
  "Programación por zonas",
  "Fácil instalación",
  "Total seguridad y privacidad",
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              ¿Por qué elegir SmartRiego?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Te presentamos un controlador de riego Wi-Fi que mejora radicalmente la experiencia frente a los sistemas
              tradicionales. Nuestro dispositivo te permite conectarte a Internet y controlarlo fácilmente desde una app
              con un sistema intuitivo, automatizado y personalizado.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
            <img
              src="/beautiful-green-garden-with-automatic-sprinkler-sy.jpg"
              alt="Jardín con sistema de riego"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
