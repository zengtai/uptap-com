import Link from "next/link";

export default function Footer(params) {
  return (
    <>
      <div className="h-32 bg-slate-900 p-4 text-sm text-gray-400">
        <div className="container mx-auto flex flex-col-reverse justify-between md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Glory Media Co., Limited. All
            Rights Reserved.
          </span>
          <Link href={`/privacy-policy`}>
            <a className="mb-4">Privacy Policy</a>
          </Link>
        </div>
      </div>
    </>
  );
}
