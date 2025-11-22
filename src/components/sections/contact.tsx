import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="w-full bg-card py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeading>Hubungi Saya</SectionHeading>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Punya proyek, ingin berkolaborasi, atau hanya ingin menyapa? Kirimi saya pesan!
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle>Hubungi Saya</CardTitle>
              <CardDescription>Isi formulir di bawah ini dan saya akan menghubungi Anda sesegera mungkin.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input id="name" placeholder="Nama Anda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@anda.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea id="message" placeholder="Pesan Anda..." />
                </div>
                <Button type="submit" className="w-full">Kirim Pesan</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
