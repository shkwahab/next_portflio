import React, {FC} from 'react';
import Image from "next/image";
import Link from "next/link";
import {FaLinkedinIn, FaFacebookF, FaGithubAlt} from "react-icons/fa"

export interface TeamMember {
    sys: {
        id: string;
    };
    username: string;
    role: string;
    slug: string;
    bio: string;
    linkedinn: string,
    github: string,
    facebook: string,
    profilepic: {
        url: string;
    };
}

interface Props {
    team: TeamMember[];
}

const Team: FC<Props> = ({team}, element: JSX.Element = <><>
    {/*<section id={`teams`}>*/}

    {/*</section>*/}
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Empowering businesses with innovative web solutions, our dynamic team of expert developers and designers combine cutting-edge technologies, captivating designs, and flawless functionality to create immersive digital experiences that engage, inspire, and drive success in the online realm.</p>
            </div>
            <div className="flex flex-wrap -m-4">
                {team.map((team) => {
                    return <div key={team.sys.id} className="p-4 lg:w-1/2">
                        <div
                            className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image alt="team" width={100} height={100}
                                   className=" flex-shrink-0 rounded-full w-32 h-32 object-cover object-center sm:mb-0 mb-4"
                                   src={team.profilepic.url}/>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">{team.username}</h2>
                                <h3 className="text-gray-500 mb-3">{team.role}</h3>
                                <p className="mb-4">{team.bio}</p>
                                <div className="flex items-center">
                                    <Link className={`mx-2`} href={team.linkedinn }>
                                        <FaLinkedinIn className={`text-xl dark:text-white`}/>
                                    </Link><Link className={`mx-2`} href={team.facebook }>
                                    <FaFacebookF className={`text-xl dark:text-white`}/>
                                </Link><Link className={`mx-2`} href={team.github }>
                                    <FaGithubAlt className={`text-xl dark:text-white`}/>
                                </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                })}


            </div>
        </div>
    </section>
</>
</>) => {
    return element;
};

export default Team;
