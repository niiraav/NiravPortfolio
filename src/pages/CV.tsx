import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, ExternalLink, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/data/resume-data";

const CV = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/Nirav-Arvinda-CV.pdf";
    link.download = "Nirav-Arvinda-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show loading state for 1.5 seconds
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex items-center gap-2 bg-nav/80 backdrop-blur-xl rounded-2xl px-3 py-2 shadow-nav border border-nav-border">
          <Button variant="nav" size="sm" className="rounded-xl gap-2" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
          <div className="w-px h-5 bg-border" />
          <Button 
            variant="hero" 
            size="sm" 
            className="rounded-xl gap-2" 
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                Download PDF
              </>
            )}
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 pt-28 pb-20">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-start gap-5 mb-6">
            <img
              src={resumeData.avatar}
              alt={resumeData.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-border"
            />
            <div>
              <h1 className="text-3xl font-bold font-serif text-foreground">
                {resumeData.name}
              </h1>
              <p className="text-muted-foreground text-lg">{resumeData.title}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-6">
            {resumeData.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-dotted border-muted-foreground/50 hover:border-foreground pb-0.5"
              >
                {link.label}
                {link.external && <ExternalLink className="h-3 w-3" />}
              </a>
            ))}
          </div>

          {/* Bio */}
          <p className="text-foreground leading-relaxed">{resumeData.bio}</p>
        </header>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-xl font-bold font-serif text-foreground mb-6">Work</h2>
          <div className="space-y-8">
            {resumeData.work.map((job, index) => (
              <div key={index} className="group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-foreground font-medium">
                    {job.title} at{" "}
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-dotted border-muted-foreground/50 hover:border-foreground hover:text-foreground pb-0.5 transition-colors"
                      >
                        {job.company}
                      </a>
                    ) : (
                      <span>{job.company}</span>
                    )}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </div>
                <ul className="space-y-1">
                  {job.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="text-muted-foreground text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-muted-foreground/30 before:rounded-full"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xl font-bold font-serif text-foreground mb-6">Education</h2>
          <div className="space-y-8">
            {resumeData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-foreground font-medium mb-1">{edu.degree}</h3>
                <p className="text-foreground/80 text-sm mb-1">{edu.institution}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>
                <ul className="space-y-1">
                  {edu.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="text-muted-foreground text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-muted-foreground/30 before:rounded-full"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-xl font-bold font-serif text-foreground mb-6">Skills</h2>
          <div className="space-y-4">
            {resumeData.skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-foreground font-medium text-sm mb-2">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-secondary/50 text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {resumeData.name}
        </footer>
      </main>
    </div>
  );
};

export default CV;
