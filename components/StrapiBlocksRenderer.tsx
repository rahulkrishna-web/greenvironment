
import React from "react";
import Link from "next/link";

interface TextNode {
    type: "text";
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
}

interface LinkNode {
    type: "link";
    url: string;
    children: TextNode[];
}

interface Block {
    type: "paragraph" | "heading" | "list" | "quote" | "code" | "image";
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    format?: "ordered" | "unordered";
    children: (TextNode | LinkNode)[];
    image?: {
        url: string;
        alternativeText?: string;
        width?: number;
        height?: number;
        caption?: string;
    };
}

const renderText = (node: TextNode | LinkNode, index: number) => {
    if (node.type === "link") {
        return (
            <Link key={index} href={node.url} className="text-primary underline underline-offset-4 hover:text-primary/80">
                {node.children.map((child, i) => renderText(child as TextNode, i))}
            </Link>
        );
    }

    let content = <span key={index}>{node.text}</span>;

    if (node.bold) {
        content = <strong key={index} className="font-semibold">{content}</strong>;
    }
    if (node.italic) {
        content = <em key={index}>{content}</em>;
    }
    if (node.underline) {
        content = <u key={index}>{content}</u>;
    }
    if (node.strikethrough) {
        content = <s key={index}>{content}</s>;
    }
    if (node.code) {
        content = <code key={index} className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">{content}</code>;
    }

    return content;
};

export const StrapiBlocksRenderer = ({ blocks }: { blocks: Block[] }) => {
    if (!blocks || !Array.isArray(blocks)) return null;

    return (
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
            {blocks.map((block, index) => {
                switch (block.type) {
                    case "paragraph":
                        return (
                            <p key={index} className="leading-7 [&:not(:first-child)]:mt-6">
                                {block.children.map((child, i) => renderText(child as TextNode | LinkNode, i))}
                            </p>
                        );
                    case "heading":
                        const Tag = `h${block.level || 1}` as React.ElementType;
                        const sizes = {
                            1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
                            2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
                            3: "scroll-m-20 text-2xl font-semibold tracking-tight",
                            4: "scroll-m-20 text-xl font-semibold tracking-tight",
                            5: "scroll-m-20 text-lg font-semibold tracking-tight",
                            6: "scroll-m-20 text-base font-semibold tracking-tight",
                        };
                        return (
                            <Tag key={index} className={sizes[(block.level || 1) as keyof typeof sizes]}>
                                {block.children.map((child, i) => renderText(child as TextNode | LinkNode, i))}
                            </Tag>
                        );
                    case "list":
                        const ListTag = block.format === "ordered" ? "ol" : "ul";
                        return (
                            <ListTag key={index} className="my-6 ml-6 list-disc [&>li]:mt-2">
                                {block.children.map((child: any, i) => (
                                    <li key={i}>
                                        {child.children?.map((c: any, j: number) => renderText(c, j))}
                                    </li>
                                ))}
                            </ListTag>
                        );
                    case "quote":
                        return (
                            <blockquote key={index} className="mt-6 border-l-2 pl-6 italic">
                                {block.children.map((child, i) => renderText(child as TextNode | LinkNode, i))}
                            </blockquote>
                        );
                    // Add more block types as needed (code, image, etc.)
                    default:
                        return null;
                }
            })}
        </div>
    );
};
