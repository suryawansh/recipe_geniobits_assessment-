import Typo from "@/components/Typo";
import { useCareers } from "@/lib/contentful";
import Image from "next/image";

const Careers = () => {
  const { careers } = useCareers();
  console.log(careers);

  return (
    <div className="container mx-auto py-16">
      <Typo fontFamily="Playfair Display" className="text-6xl font-bold mb-8">
        Careers
      </Typo>
      {careers.length === 0 && (
        <p className="text-lg py-4">
          {" "}
          We don&apos;t have vacancies yet. Please check again later.
        </p>
      )}
      {careers.length !== 0 &&
        careers.map((career: any) => (
          <div key={career.sys.id} className="my-8">
            <Typo fontFamily="Playful Details" className="text-2xl font-medium">
              {career.fields.title}
            </Typo>
            <p className="text-lg mt-4">{career.fields.description}</p>
            <Image
              src={career.fields.image.fields.file.url}
              alt={career.fields.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <Typo
              fontFamily="Playful Details"
              className="text-xl font-medium mt-8"
            >
              Responsibilities
            </Typo>
            <ul className="list-disc pl-8">
              {career.fields.responsibilities
                .split("\n")
                .map((responsibility: any, index: number) => (
                  <li key={index} className="text-lg">
                    {responsibility}
                  </li>
                ))}
            </ul>
            <Typo
              fontFamily="Playful Details"
              className="text-xl font-medium mt-8"
            >
              Requirements
            </Typo>
            <ul className="list-disc pl-8">
              {career.fields.requirements
                .split("\n")
                .map((requirement: any, index: number) => (
                  <li key={index} className="text-lg">
                    {requirement}
                  </li>
                ))}
            </ul>
            <Typo
              fontFamily="Playful Details"
              className="text-xl font-medium mt-8"
            >
              Benefits
            </Typo>
            <ul className="list-disc pl-8">
              {career.fields.benefits
                .split("\n")
                .map((benefit: any, index: number) => (
                  <li key={index} className="text-lg">
                    {benefit}
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Careers;
