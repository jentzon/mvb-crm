interface Project {
    id: string;
    name: string;
    types: Array<string>;
    contract: string;
    startTime: string;
    constructionMonths: number;
    location: string;
}

// Configuration types
interface ColorTheme {
    main: string;
    greenSuccess: string;
    redFailure: string;
}

interface Module {
    moduleName: string;
}

interface BrandConfiguration {
    companyName: string;
    brand: string;
    enabledOverviewModules: Array<Module>;
    colorTheme: ColorTheme;
}
