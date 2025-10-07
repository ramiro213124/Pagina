import { Card } from "@/components/ui/card"

export function AppShowcase() {
  return (
    <section id="app" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Control total desde tu smartphone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Nuestra aplicación te permite encender y programar el riego desde cualquier lugar. Incluye el estado de
            válvulas en tiempo real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 bg-card border-border">
            <div className="aspect-[9/16] bg-muted rounded-xl overflow-hidden mb-4">
              <img src="/mobile-app-irrigation-control-interface-dark-theme.jpg" alt="App Screenshot 1" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground text-center">Control de Válvulas</h3>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="aspect-[9/16] bg-muted rounded-xl overflow-hidden mb-4">
              <img src="/mobile-app-irrigation-schedule-programming-interfa.jpg" alt="App Screenshot 2" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground text-center">Programación</h3>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="aspect-[9/16] bg-muted rounded-xl overflow-hidden mb-4">
              <img src="/mobile-app-garden-irrigation-statistics-dashboard-.jpg" alt="App Screenshot 3" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground text-center">Estadísticas</h3>
          </Card>
        </div>
      </div>
    </section>
  )
}
