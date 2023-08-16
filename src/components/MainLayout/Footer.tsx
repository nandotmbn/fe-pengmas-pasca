import Image from "next/image";
import Link from "next/link";
import React from "react";

function FooterMainLayout() {
	return (
		<div className="h-72 bg-gray-50 md:border-r-8 border-r-blue-800 md:border-t-8 border-t-yellow-400 w-full flex flex-col md:flex-row pt-16 p-2 lg:px-24 lg:py-12 gap-8">
			<div className="flex-1 flex items-center">
				<Image
					className="contain relative w-full"
					src="/images/pens-long-logo.png"
					alt="Jumbotron PENS"
					width={400}
					height={400}
          unoptimized={true}
				/>
			</div>
			<div className="flex-2 flex justify-center flex-col text-xs">
        <p>Jl. Raya ITS, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111</p>
        <p>Indonesia</p>
        <p>(031) 5947280</p>
        <p>humas@pens.ac.id</p>

        <div className="mt-4 flex flex-row gap-4 text-cyan-500">
          <Link href="/">
            <p>Instagram</p>
          </Link>
          <Link href="/">
            <p>Twitter</p>
          </Link>
          <Link href="/">
            <p>Facebook</p>
          </Link>
        </div>
      </div>
			<div className="flex-2 flex justify-center flex-col text-xs">
        <div className="mt-4 flex flex-col gap-4 text-cyan-500">
          <Link href="/">
            <p>Privacy and Policy</p>
          </Link>
          <Link href="/">
            <p>Terms and Condition</p>
          </Link>
          <Link href="/admin">
            <p>Administrator</p>
          </Link>
        </div>
      </div>
		</div>
	);
}

export default FooterMainLayout;
