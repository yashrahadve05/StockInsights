import React from "react";
import Image from "next/image";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default">
                <Link href="/" className="auth-logo">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="StockInsights"
                        width={140}
                        height={32}
                        className="h-8 w-auto"
                    />
                </Link>

                <div className="pb-6 lg:pb-8 flex-1">{children}</div>
            </section>

            <section className="auth-right-section">
                <div className="z-10 relative lg:mt-3 lg:mb-16">
                    <blockquote className="auth-blockquote">
                        StockInsights is an all-in-one stock market dashboard.
                        It provides real-time market data, interactive charts,
                        and financial news in a sleek and responsive interface.
                        Whether you're a seasoned trader or just starting out,
                        StockInsights offers the tools you need to stay informed
                        and make smarter investment decisions.
                    </blockquote>
                    <div className="flex items-center justify-between">
                        <cite className="auth-testimonial-author">
                            - Yash Kumar
                            <p className="max-md:text-xs font-normal text-gray-500">
                                Retail Invester
                            </p>
                        </cite>
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Image
                                    key={star}
                                    src="/assets/icons/star.svg"
                                    alt="Star"
                                    width={20}
                                    height={20}
                                    className="h-5 w-5"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <Image
                        src="/assets/images/dashboard.png"
                        alt="Dashboard Previwe"
                        width={1440}
                        height={1150}
                        className="auth-dashboard-preview absolute top-0"
                    />
                </div>
            </section>
        </main>
    );
};

export default layout;
