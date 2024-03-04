import React from 'react';
import Avatar from "@/_components/Avatar";
import Bounded from "@/_components/Bounded";
import Button from "@/_components/Button";
import Heading from "@/_components/Heading";
import Image from 'next/image'; // Import Next.js Image component

type BiographyProps = {
 heading: string;
 body: string;
 button_text: string;
 button_link: string;
 avatar: string; // Path to the avatar image
};

const Biography = ({ heading, body, button_text, button_link, avatar }: BiographyProps): JSX.Element => {
 return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          {heading}
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <p>{body}</p>
        </div>
        <Button href={button_link} label={button_text} />

        <Avatar imageSrc={avatar} className="row-start-1 max-w-sm md:col-start-2 md:row-end-3">
          
        </Avatar>
      </div>
    </Bounded>
 );
};

export default Biography;
