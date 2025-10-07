import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <Card className="bg-gradient-to-br from-primary to-secondary p-12 text-center border-0">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            ¿Querés saber más?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Escribinos para más información sobre cómo SmartRiego puede transformar tu jardín
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-base px-8" asChild>
              <a href="mailto:ramirosamudio@gmail.com">
                <Mail className="mr-2 w-5 h-5" />
                ramirosamudio@gmail.com
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
