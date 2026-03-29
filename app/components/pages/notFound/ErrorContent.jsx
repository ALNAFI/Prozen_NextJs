import Link from "next/link";
export default function ErrorContent() {
  return (
    <div className="ht-error-page-area section-padding">
      <div className="container">
        <div className="error-content">
          <div className="err-img">
            <img src="/images/error/error.svg" alt="not-found" />
          </div>
          <p>
            Sorry, the page you’re looking for doesn’t exist. If you think
            something is broken, report a porblem
          </p>
          <Link href="/" className="ht-btn style-2">
            Bact To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
