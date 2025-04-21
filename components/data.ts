import {
	MessageSquare,
	ListTodo,
	FileText,
	Video,
	PenTool,
	Calendar,
	CheckSquare,
	Sparkles,
	Zap,
	Lock,
	Globe,
	Layers,
	RefreshCw,
	FormInput,
} from 'lucide-react';

export const products = [
	{
		name: 'Ping',
		description: 'Team messaging and collaboration',
		href: '/ping',
		icon: MessageSquare,
		color: 'indigo',
		gradient: 'from-indigo-500 to-indigo-400',
		featured: true,
		tagline: 'Real-time communication hub',
		features: [
			'Threaded conversations',
			'Smart message organization',
			'AI-powered summaries',
			'Seamless file sharing',
		],
	},
	{
		name: 'Flow',
		description: 'Task and project management - Our flagship product',
		href: '/flow',
		icon: ListTodo,
		color: 'blue',
		gradient: 'from-blue-500 to-blue-400',
		featured: true,
		tagline: "The core of Proddy's ecosystem",
		features: [
			'Visualize workflows',
			'Track progress across teams',
			'Automate task prioritization',
			'Connect all your work in one hub',
		],
	},
	{
		name: 'Notes',
		description: 'Collaborative documents',
		href: '/notes',
		icon: FileText,
		color: 'emerald',
		gradient: 'from-emerald-500 to-emerald-400',
	},
	{
		name: 'Huddle',
		description: 'Video meetings and recordings',
		href: '/huddle',
		icon: Video,
		color: 'red',
		gradient: 'from-red-500 to-red-400',
	},
	{
		name: 'Canvas',
		description: 'Visual whiteboarding',
		href: '/canvas',
		icon: PenTool,
		color: 'yellow',
		gradient: 'from-yellow-500 to-yellow-400',
	},
	{
		name: 'Input',
		description: 'Smart form builder and data collection',
		href: '/input',
		icon: FormInput,
		color: 'pink',
		gradient: 'from-pink-500 to-pink-400',
	},
	{
		name: 'Slots',
		description: 'Smart scheduling',
		href: '/slots',
		icon: Calendar,
		color: 'violet',
		gradient: 'from-violet-500 to-violet-400',
	},
	{
		name: 'Ticks',
		description: 'Personal to-do lists',
		href: '/ticks',
		icon: CheckSquare,
		color: 'orange',
		gradient: 'from-orange-500 to-orange-400',
	},
];

export const aiFeatures = [
	{
		title: 'Auto-summarization',
		description:
			'Automatically summarize chats, meetings, tasks, and notes to save time and improve focus.',
		icon: Sparkles,
	},
	{
		title: 'Smart replies',
		description:
			'Get intelligent reply suggestions in chat based on context and conversation history.',
		icon: MessageSquare,
	},
	{
		title: 'Task prioritization',
		description:
			'AI analyzes your tasks and suggests the optimal order based on deadlines, dependencies, and importance.',
		icon: ListTodo,
	},
	{
		title: 'Diagram suggestions',
		description:
			'Get intelligent diagram and visualization suggestions while whiteboarding.',
		icon: PenTool,
	},
	{
		title: 'Form generation',
		description:
			'Create custom forms instantly with AI that understands your data collection needs.',
		icon: FormInput,
	},
	{
		title: 'Task recommendations',
		description:
			'Receive personalized task suggestions based on your work patterns and goals.',
		icon: Zap,
	},
];

export const benefits = [
	{
		title: 'All-in-one solution',
		description:
			'Replace multiple disconnected tools with one unified platform that handles all your productivity needs.',
		icon: Layers,
	},
	{
		title: 'Seamless integration',
		description:
			'All Proddy modules work together perfectly, sharing data and context across your entire workflow.',
		icon: RefreshCw,
	},
	{
		title: 'Global accessibility',
		description:
			'Access your work from anywhere, on any device, with real-time synchronization.',
		icon: Globe,
	},
	{
		title: 'Enterprise-grade security',
		description:
			'Your data is protected with end-to-end encryption and advanced security features.',
		icon: Lock,
	},
];
