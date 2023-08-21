import React from "react";
import Image from "next/image";
export default function Sponsor() {
	return (
        <section className="pt-12 pb-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-12">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                    Featured Sponsors
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                    Pelaksanaan kegiatan ini didukung oleh beberapa lembaga
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="logo pens"
                    src="/images/sponsor/logopens.png"
                    className="shadow-lg rounded-full mx-auto"
                    width={150}
					height={150}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      PENS
                    </h5>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="logo aquaculture"
                    src={'/images/logo-aquaculture-pens.png'}
                    className="shadow-lg rounded-full mx-auto"
                    width={150}
					height={150}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      AQUACULTURE PENS
                    </h5>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div>

                  </div>
                  <Image
                    alt="Logo LPDP"
                    src="/images/sponsor/lpdp.png"
                    className="shadow-lg rounded-full mx-auto"
                    width={150}
					height={150}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      LPDP
                    </h5>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="Logo Kemendikbud"
                    src="/images/sponsor/kemendikbud.png"
                    className="shadow-lg rounded-full mx-auto"
                    width={150}
				    height={150}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      KEMENDIKBUD
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
	)
}
