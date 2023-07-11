import {BLOCKS, INLINES, MARKS} from '@contentful/rich-text-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import Image from 'next/image';
import Code from "@/app/components/Code";

const options = {
    renderMark: {
        [MARKS.CODE]: (text: any) => {
            return (
                <pre>
          <code>{text}</code>
        </pre>
            );
        },
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
            if (
                node.content.find((item: any) =>
                    item.marks?.find((mark: any) => mark.type === 'code')
                )
            ) {
                return (
                    <div>
            <pre>
              <code>{children}</code>
            </pre>
                    </div>
                );
            }

            return <p className={`my-2 md:my-4`}>{children}</p>;
        },
        [BLOCKS.HEADING_2]: (node: any, children: any) => {
            return <h2 className={`text-xl my-4  sm:text-2xl md:text-3xl  font-medium`}>{children}</h2>;
        },
        [BLOCKS.HEADING_3]: (node: any, children: any) => {
            return <h2 className={`text-lg my-4  sm:text-xl md:text-2xl font-medium`}>{children}</h2>;
        },
        [INLINES.ENTRY_HYPERLINK]: (node: any) => {
            if (node.data.target.sys.contentType.sys.id === 'post') {
                return (
                    <Link href={`/posts/${node.data.target.fields.slug}`}>
                        {node.data.target.fields.title}
                    </Link>
                );
            }
        },
        [INLINES.HYPERLINK]: (node: any) => {
            const text = node.content.find(
                (item: any) => item.nodeType === 'text'
            )?.value;
            return (
                <Link className={`text-primaryColor`} target={node.data.uri.includes("https") ? "_blank" : "_self"}
                      href={node.data.uri}>
                    {text}
                </Link>
            );
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node:any) => {
            if (node.data.target.sys.contentType.sys.id ==="code"){
                return(
                        <Code codetype={node.data.target.fields.codetype} code={node.data.target.fields.code} backgroundColor={"#000"}/>
                )
            }

        },

        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            if (node.data.target.fields.file.contentType === 'video/mp4') {
                return (
                    <video className={`my-4`}
                        width="1920px"
                        height="1080px"
                        src={"https:" + node.data.target.fields.file.url}
                        title={node.data.target.fields.title}
                        autoPlay={true}
                        controls
                    />
                )
            } else {
                return (
                   <div className={'text-center'}>

                       <Image
                           src={"https:" + node.data.target.fields.file.url}
                           height={node.data.target.fields.file.details.image.height}
                           width={node.data.target.fields.file.details.image.width}
                           alt={node.data.target.fields.title}
                           className="h-[450px] w-11/12 md:w-[75%] my-4  mx-auto object-cover object-center rounded-lg"
                       />

                       <p>{node.data.target.fields.title}</p>
                       </div>
                );
            }
        },
    },

};

const RichText = ({content}: { content: any }) => {
    return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;
