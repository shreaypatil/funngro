import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const BlogHighlights = ({ blogs }) => {
    return (
        <Section background="gradient-purple">
            <SectionHeader
                title="Latest from Our Blog"
                subtitle="Insights & Stories"
            />

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {blogs.map((blog, index) => (
                    <Card key={index} variant="glass">
                        {/* Blog Image Placeholder */}
                        <div className="w-full h-48 bg-gradient-card rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-dark-text-secondary text-sm">Blog Image</span>
                        </div>

                        <div className="flex items-center gap-4 mb-3">
                            <span className="text-xs px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full font-medium">
                                {blog.category}
                            </span>
                            <span className="text-xs text-dark-text-secondary flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {blog.date}
                            </span>
                        </div>

                        <h3 className="text-xl font-semibold text-dark-text mb-3 line-clamp-2">
                            {blog.title}
                        </h3>

                        <p className="text-dark-text-secondary text-sm mb-4 line-clamp-3">
                            {blog.excerpt}
                        </p>

                        <a
                            href={blog.link}
                            className="text-accent-purple font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all"
                        >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </Card>
                ))}
            </div>

            <div className="text-center">
                <Button variant="secondary" href="/blogs">
                    View All Blogs
                </Button>
            </div>
        </Section>
    );
};

export default BlogHighlights;
