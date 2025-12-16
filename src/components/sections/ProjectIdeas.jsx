import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ProjectIdeas = ({ content }) => {
    const { title, subtitle, projects } = content;

    return (
        <Section background="dark">
            <SectionHeader title={title} subtitle={subtitle} />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => {
                    const Icon = Icons[project.icon];

                    return (
                        <Card key={index} variant="glass">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                                    {Icon && <Icon className="w-6 h-6 text-white" />}
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold gradient-text">{project.price}</div>
                                    <div className="text-xs text-dark-text-secondary">{project.duration}</div>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-dark-text mb-3">
                                {project.name}
                            </h3>

                            <p className="text-dark-text-secondary text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <Button variant="secondary" className="w-full justify-center">
                                Start Now
                            </Button>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
};

export default ProjectIdeas;
