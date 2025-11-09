import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink } from "lucide-react";

const AppCard = ({
  title,
  description,
  platform,
  downloadUrl,
  webUrl,
  version,
  icon,
}) => {
  const getPlatformColor = () => {
    switch (platform) {
      case "android":
        return "bg-green-500";
      case "ios":
        return "bg-blue-500";
      case "web":
        return "bg-accent";
      default:
        return "bg-primary";
    }
  };

  const getPlatformLabel = () => {
    switch (platform) {
      case "android":
        return "Android";
      case "ios":
        return "iOS";
      case "web":
        return "Web";
      default:
        return platform;
    }
  };

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {icon && (
                <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center text-2xl">
                  {icon}
                </div>
              )}
              <div>
                <CardTitle className="text-lg font-serif">{title}</CardTitle>
                {version && (
                  <p className="text-xs text-muted-foreground font-mono">
                    v{version}
                  </p>
                )}
              </div>
            </div>
          </div>
          <Badge className={`${getPlatformColor()} font-mono text-xs`}>
            {getPlatformLabel()}
          </Badge>
        </div>
        <CardDescription className="mt-2 font-mono text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {downloadUrl && (
            <Button className="w-full font-mono text-sm" asChild>
              <a href={downloadUrl} download>
                <Download className="mr-2 h-4 w-4" />
                descargar apk
              </a>
            </Button>
          )}
          {webUrl && (
            <Button
              variant="outline"
              className="w-full font-mono text-sm"
              asChild
            >
              <a href={webUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                abrir app web
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppCard;