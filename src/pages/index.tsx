import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TwitterOutlined, LinkedinFilled } from "@ant-design/icons";
import Card from "~/components/Card";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import HeaderLink from "~/components/HeaderLink";
import { HiOutlineMenu } from "react-icons/hi";

const Home: NextPage = () => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Head>
        <title>OGavin</title>
        <meta name="description" content="A portfolio for Oscar Gavin" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="h-full w-full bg-gradient-to-b from-gray-600 to-gray-700 pb-16 font-poppins text-gray-50">
        <div className="flex w-full items-center justify-between border-b-2 border-gray-50 pt-10 pb-2">
          <Link
            href="/"
            className="ml-4 flex flex-row items-center space-x-4 pb-6 transition "
          >
            <Image
              src="/logo.png"
              alt="OGavin"
              width={50}
              height={50}
              className="w-1/3 rounded-full md:w-1/2"
            />
            <h1 className="text-xl font-bold md:text-4xl">OGavin</h1>
          </Link>
          <div className="relative">
            <HiOutlineMenu
              className={`${
                active ? "rotate-90" : "rotate-0"
              } absolute right-6 bottom-1 z-20 transition ease-in-out lg:hidden`}
              width={50}
              height={50}
              onClick={onClick}
            ></HiOutlineMenu>
            <div className="absolute right-6 -top-5 hidden flex-row items-center space-x-6 pb-6 lg:flex">
              <HeaderLink title="Home" href="/" />
              <HeaderLink title="Skills" href="/" />
              <HeaderLink title="Projects" href="/" />
              <HeaderLink title="Blog" href="/blog" />
              <HeaderLink title="Contact" href="/contact" />
            </div>
          </div>
        </div>
        <div
          className={`${
            active ? "flex" : "hidden"
          } flex-col space-y-2 border-b-2 border-gray-50 bg-black/10 py-6 px-6 drop-shadow-lg backdrop-blur-lg`}
        >
          <HeaderLink title="Home" href="/" />
          <HeaderLink title="Skills" href="/" />
          <HeaderLink title="Projects" href="/" />
          <HeaderLink title="Blog" href="/blog" />
          <HeaderLink title="Contact" href="/contact" />
        </div>
        <div className="flex w-full items-center justify-between border-b-2 border-gray-50 bg-black/10 py-6 px-6 drop-shadow-lg backdrop-blur-lg">
          <div className="flex flex-col opacity-100">
            <div className="mb-6 flex flex-row space-x-4">
              <Link
                href="https://twitter.com/Oscar_Gav"
                className="flex transform items-center rounded-full border-2 p-2 transition duration-500 ease-in-out hover:scale-110"
              >
                <TwitterOutlined />
              </Link>
              <Link
                href="https://www.linkedin.com/in/oscar-gavin-7531681ab/"
                className="flex transform items-center rounded-full border-2 p-2 transition duration-500 ease-in-out hover:scale-110"
              >
                <LinkedinFilled />
              </Link>
              <Link
                href="https://github.com/oscargavin"
                className="flex transform items-center rounded-full border-2 p-2 transition duration-500 ease-in-out hover:scale-110"
              >
                <BsGithub />
              </Link>
            </div>
            <h1 className="text-md pb-2 font-semibold text-gray-50 md:text-2xl lg:text-lg">
              I am Oscar Gavin...
            </h1>
            <p className="lg:text-md text-sm font-extralight text-gray-100 md:text-lg">
              an Artificial Intelligence and Computer Science graduate, with
              knowledge in full-stack development and machine learning
            </p>
          </div>
          <div>
            {/* <Image
              src="/logo.png"
              alt="OGavin"
              width={300}
              height={300}
              className="w-2/3 lg:w-full"
            ></Image> */}
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-center">
          <div className="mb-8 flex flex-col items-center justify-center">
            <p className="mb-2 text-xs font-bold text-gray-200">SKILLS</p>
            <h1 className="text-2xl font-semibold text-gray-50">
              My Expertise
            </h1>
          </div>
          <div className="mx-3 flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4">
            <Card
              title="Web Development"
              description="I have experience in full-stack development, with a focus on the front-end. I have worked with React, Next.js, Prisma, tRPC, and Tailwind CSS."
              image="/web.png"
              link="/"
            />
            <Card
              title="Machine Learning"
              description="I have experience in machine learning, with a focus on computer vision. I have worked with PyTorch, Pandas, and Comet."
              image="/machine.png"
              link="/"
            />
            <Card
              title="Natural Language Processing"
              description="I have experience in natural language processing, with a focus on sentiment analysis and information retrieval. I have worked with NLTK, Pandas, and spaCy."
              image="/data.png"
              link="/"
            />
          </div>
        </div>
        <div className="mt-12 border-y-2 border-gray-50 bg-black/10 py-4 drop-shadow-lg backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center space-x-2">
              <h1>Email</h1>
              <MdEmail />
            </div>
            <p>oscarfgavin@gmail.com</p>
          </div>
        </div>
        <div className="mx-4 mt-8 lg:mx-16 ">
          <div className="mb-8 flex flex-col items-center justify-center">
            <p className="mb-2 text-xs font-bold text-gray-200">PROJECTS</p>
            <h1 className="text-2xl font-semibold text-gray-50">My Work</h1>
          </div>
          <div className="mb-10 flex min-h-fit flex-col items-center space-y-4 rounded-md border-2 border-gray-50 bg-black/10 p-6 drop-shadow-lg backdrop-blur-lg md:flex-row lg:transform lg:transition lg:duration-500 lg:ease-in-out lg:hover:scale-[1.03]">
            <div className="mr-4">
              <h1 className="pb-2 font-semibold">Landmark Localisation</h1>
              <p className="font-extralight text-gray-200">
                Drawing on the prominent UNet framework as a source of
                inspiration, I adapted the encoding layer to incorporate
                Transformers, surpassing the use of solely convolutional layers.
                By doing so, the model&apos;s ability to comprehend the spatial
                associations among landmarks improved, leading to enhanced
                precision in their localization. The model was then trained on a
                publicly accessible biomedical dataset, and ultimately produced
                a noteworthy average Intersection over Union (IoU) score of 0.92
                during testing.
              </p>
            </div>
            <Image
              src="/landmark.png"
              alt="Landmark"
              width={300}
              height={300}
              className="rounded-sm object-contain shadow-md"
            ></Image>
          </div>
          <div className="mb-10 flex min-h-fit transform flex-col items-center space-y-4 rounded-md border-2 border-gray-50 bg-black/10 p-6 drop-shadow-lg backdrop-blur-lg md:flex-row lg:transition lg:duration-500 lg:ease-in-out lg:hover:scale-[1.03]">
            <div className="mr-4">
              <h1 className="pb-2 font-semibold">Cardology.io</h1>
              <p className="font-extralight text-gray-200">
                Cardology is a unique platform that leverages cutting-edge
                technology to create customized flashcards from any PDF
                document. Our proprietary system uses GPT-3 to extract the most
                important information from your document and transform it into a
                set of flashcards for easy studying. With our intuitive user
                interface and advanced spaced repetition algorithm, you can
                easily revise and retain the information you need for your
                studies or work.
              </p>
            </div>
            <Image
              src="/cardology.png"
              alt="Cardology"
              width={300}
              height={300}
              className="rounded-sm object-cover shadow-md"
            ></Image>
          </div>
          <div className="mb-10 flex min-h-fit transform flex-col items-center space-y-4 rounded-md border-2 border-gray-50 bg-black/10 p-6 drop-shadow-lg backdrop-blur-lg md:flex-row lg:transition lg:duration-500 lg:ease-in-out lg:hover:scale-[1.03]">
            <div className="mr-4">
              <h1 className="pb-2 font-semibold">
                Chess Piece and Board Position Classifier
              </h1>
              <p className="font-extralight text-gray-200">
                For the chess piece classification project, I had the task of
                accurately classifying chess pieces with varying levels of noise
                and board positioning. I utilized advanced techniques such as
                Principal Component Analysis (PCA), divergence, and K-means
                clustering to accomplish this task. Following a thorough testing
                and analysis process, the model achieved a 98% accuracy rate for
                chess piece classification and 90% accuracy for board
                positioning.
              </p>
            </div>
            <Image
              src="/chess.png"
              alt="Chess"
              width={300}
              height={300}
              className="rounded-sm object-contain"
            ></Image>
          </div>
          <div className="mb-10 flex min-h-fit transform flex-col items-center space-y-4 rounded-md border-2 border-gray-50 bg-black/10 p-6 drop-shadow-lg backdrop-blur-lg md:flex-row lg:transition lg:duration-500 lg:ease-in-out lg:hover:scale-[1.03]">
            <div className="mr-4">
              <h1 className="pb-2 font-semibold">
                Sentiment Analyser for Rotten Tomatoes Reviews
              </h1>
              <p className="font-extralight text-gray-200">
                For my sentiment classification project on Rotten Tomato
                reviews, I was tasked with classifying reviews on a scale
                ranging from 0 (negative) to 4 (positive), with 2 indicating
                neutral sentiment. To accomplish this, I utilized a Naive Bayes
                classifier, as well as advanced techniques such as Term
                Frequency-Inverse Document Frequency (TF-IDF) and Jelinek Mercer
                smoothing. What sets my approach apart is that I hard-coded all
                techniques, without relying on libraries such as scikit. Through
                extensive testing and analysis, I was able to achieve a
                record-breaking accuracy rate of 75%, surpassing the results
                achieved by my peers. I attribute this success to my innovative
                approach, which involved finding words most likely to produce
                correct classifications and weighting them based on their
                information content.
              </p>
            </div>
            <Image
              src="/bayes.png"
              alt="Naive-Bayes Classifier"
              width={300}
              height={300}
              className="rounded-sm object-contain"
            ></Image>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
