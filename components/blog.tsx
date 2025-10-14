import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="max-w-(--breakpoint-xl) mx-auto py-16 px-6 xl:px-0">
      <h2 className="mb-8 xs:mb-14 text-4xl md:text-5xl font-bold text-center tracking-tight">
        Blogs
      </h2>

      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[0, 1, 2].map((i) => (
          <Card key={i} className="shadow-none py-0 gap-3">
            <CardHeader className="p-2 pb-0">
              <div className="aspect-video bg-muted rounded-lg w-full" />
            </CardHeader>
            <CardContent className="pt-0 pb-5 px-5">
              <Badge variant="secondary">Technology</Badge>

              <h3 className="mt-4 text-[1.4rem] font-semibold tracking-tight">
                What is the future of web development?
              </h3>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-muted"></div>
                  <span className="text-muted-foreground font-medium">
                    John Doe
                  </span>
                </div>

                <span className="text-muted-foreground text-sm">
                  Nov 30, 2024
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
