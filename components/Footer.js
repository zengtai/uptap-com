import Link from "next/link";

export default function Footer(params) {
  return (
    <>
      <div className="h-32 bg-slate-900 p-4 text-sm text-gray-400">
        <div className="container mx-auto flex flex-col-reverse justify-between md:flex-row">
          <div className="flex flex-col gap-1">
            <p>
              &copy; {new Date().getFullYear()} FUTURE FUN PTE,LTD. All Rights
              Reserved.
            </p>
            <address>
              10 ANSON ROAD #13-15 INTERNATIONAL PLAZA SINGAPORE 079903
            </address>
          </div>
          <Link href={`/privacy-policy`}>
            <a className="mb-4">Privacy Policy</a>
          </Link>
        </div>
      </div>
    </>
  );
}
