"use client"
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as Theme } from 'next-themes';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

interface Props {
    children: ReactNode;
    SPACE_ID: any;
    DELIVERY_TOKEN: any;
}

const ThemeProvider: FC<Props> = ({ children, SPACE_ID, DELIVERY_TOKEN }) => {

    const [company, setCompany] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const timestamp = Date.now().toString();
                const result = await fetch(
                    `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`,
                    {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${DELIVERY_TOKEN}`,
                            'Content-Type': 'application/json',
                            'Cache-Control': 'no-cache',
                        },
                        body: JSON.stringify({
                            query: `
                query companyEntryQuery${timestamp} {
                  company(id: "79BcPAv3ISMtIRQtiU7r0p") {
                    sys {
                      id
                    }
                    name
                    github
                    linkedin
                    facebook
                    instagram
                  }
                }
              `,
                        }),
                    }
                );

                if (!result.ok) {
                    console.error(result);
                    return {};
                }

                const { data } = await result.json();
                const response = data.company;
                setCompany(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

// alert(testResult)
    }, [SPACE_ID, DELIVERY_TOKEN]);


    const socialIcons = {
        facebook: company?.facebook || '',
        instagram: company?.instagram || '',
        linkedin: company?.linkedin || '',
        github: company?.github || '',
    };

    return (

        <Theme attribute="class">
            <Navbar
                siteTitle="Code Brothers"
                category={[
                    {
                        id: '1',
                        title: 'Blog',
                        href: '/blog',
                    },
                    {
                        id: '2',
                        title: 'Portfolio',
                        href: '/portfolio',
                    },
                    {
                        id: '3',
                        title: 'Services',
                        href: '/services',
                    },
                    {
                        id: '4',
                        title: 'Themes',
                        href: '/themes',
                    },
                ]}
            />

            {children}
            {company && (
                <Footer
                    siteTitle={company.name}
                    socialIcons={socialIcons}

                />
            )}
        </Theme>

    );
};

export default ThemeProvider;
