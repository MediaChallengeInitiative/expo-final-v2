import Image from "next/image"
import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

interface TeamMemberProps {
    name: string;
    position: string;
    imageUrl: string;
    index: number;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, position, imageUrl, index }) => {
    return (
        <div className="w-[25rem] mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="relative">
                <Image width={500} height={500} src={imageUrl} alt={name} className="w-full h-auto object-cover object-center" />
            </div>
            <div className="relative -mt-10 mx-4">
                <div className="bg-orange-500 text-white rounded-2xl p-4 text-center">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="text-sm">{position}</p>
                </div>
            </div>
            <div className="flex justify-center space-x-2 p-4 mt-2">
                <SocialIcon Icon={FaFacebook} />
                <SocialIcon Icon={FaTwitter} />
                <SocialIcon Icon={FaYoutube} />
                <SocialIcon Icon={FaInstagram} />
            </div>
        </div>
    );
};

const SocialIcon: React.FC<{ Icon: React.ElementType }> = ({ Icon }) => (
    <div className="w-10 h-10 bg-gray-100 rounded-full transition-transform ease-in-out hover:scale-105 hover:bg-orange-400  flex items-center justify-center">
        <Icon className="text-gray-600 w-5 h-5 " />
    </div>
);

export default TeamMemberCard;