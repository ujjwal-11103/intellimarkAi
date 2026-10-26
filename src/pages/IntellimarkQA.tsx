import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Search,
  Sparkles,
  CheckCircle2,
  Share2,
  Check,
  ChevronRight,
  Layers,
  TrendingUp,
  BrainCircuit,
  BarChart3,
  Calendar,
  HelpCircle,
  ArrowLeft,
  X
} from 'lucide-react';

/* ==========================================================================
   Intellimark: questions and answers (FMCG Planning, Forecasting & Field Sales)
   All content from original IntellimarkQA + Intellimark AI App Theme & Setup
   ========================================================================== */

export interface QABulletItem {
  lead?: string;
  text: string;
}

export type QAContentBlock =
  | { t: 'p'; x: string }
  | { t: 'h'; x: string }
  | { t: 'ul'; x: QABulletItem[] };

export interface QAItem {
  q: string;
  a: QAContentBlock[];
}

export interface QAGroup {
  topic: string;
  items: QAItem[];
}

const DATA: QAGroup[] = [
  {
    "topic": "Production planning and supply chain",
    "items": [
      {
        "q": "How does AI improve production planning for FMCG manufacturers?",
        "a": [
          {
            "t": "p",
            "x": "AI improves FMCG production planning by producing more accurate, SKU-level demand forecasts and feeding them straight into the plan. Planners see likely demand, the uncertainty around it and the drivers behind it, so they can set production quantities, schedules and inventory targets earlier, with fewer stock-outs, less excess stock and less firefighting."
          },
          {
            "t": "p",
            "x": "Many plans are still built from last year’s sales with manual adjustments. Promotions, price changes, festivals, weather and distributor stocking move demand faster than a monthly planning cycle can follow."
          },
          {
            "t": "p",
            "x": "Errors at SKU level add up. Fast-moving items run short while slow-moving items pile up, and plants end up with rush changeovers and expedited raw material orders."
          },
          {
            "t": "h",
            "x": "What AI changes"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Forecasts at the right level:",
                "text": "demand is predicted by SKU, region and channel, and refreshed more often."
              },
              {
                "lead": "Explained drivers:",
                "text": "planners can see what is lifting or lowering demand, such as promotions, price or season, and decide whether to trust it."
              },
              {
                "lead": "A range, not one number:",
                "text": "safety stock and buffers can reflect real uncertainty instead of a flat percentage."
              },
              {
                "lead": "Early warning:",
                "text": "upcoming demand spikes are visible in time to plan raw materials and plant capacity."
              }
            ]
          },
          {
            "t": "p",
            "x": "AI does not replace the planner or the sales and operations planning (S&OP) meeting. It supplies better inputs. Planners compare the forecast with the current plan, test what-if scenarios and keep the final decision."
          }
        ]
      },
      {
        "q": "How do SKU-level forecasts reduce stock-outs and overproduction?",
        "a": [
          {
            "t": "p",
            "x": "SKU-level forecasts reduce stock-outs and overproduction because demand differs sharply between products, pack sizes and locations. When plans are built from a category or total forecast, fast sellers run short while slow sellers pile up. A forecast for each SKU and location lets production and inventory match what each item will actually sell."
          },
          {
            "t": "p",
            "x": "A category total can look accurate while individual SKUs are badly off. A promotion on one pack size, a price change on another or a regional festival can shift demand between items without moving the total."
          },
          {
            "t": "p",
            "x": "Production and inventory are decided item by item, so the forecast has to be item by item too."
          },
          {
            "t": "h",
            "x": "What a good SKU-level forecast needs"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Consistent hierarchy:",
                "text": "SKU forecasts should add up to brand, category and region totals, so every team works from one set of numbers."
              },
              {
                "lead": "Promotion and price inputs:",
                "text": "planned activity is a main reason SKU demand moves."
              },
              {
                "lead": "A method for sparse data:",
                "text": "new launches and slow sellers have little history, so the model learns from similar products."
              },
              {
                "lead": "An uncertainty range:",
                "text": "the plan can hold more buffer where demand is hard to predict."
              }
            ]
          },
          {
            "t": "h",
            "x": "Where the benefits show up"
          },
          {
            "t": "ul",
            "x": [
              {
                "text": "Fewer lost sales from empty shelves."
              },
              {
                "text": "Lower working capital tied up in slow-moving stock."
              },
              {
                "text": "Less write-off from short shelf life or expiry."
              },
              {
                "text": "Steadier plant utilisation with fewer emergency changeovers."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "topic": "Demand forecasting and nowcasting",
    "items": [
      {
        "q": "What is explainable AI forecasting?",
        "a": [
          {
            "t": "p",
            "x": "Explainable AI forecasting is demand forecasting in which the model shows why it predicts what it does. Instead of one number from a black box, planners see how price, promotions, seasonality, distribution and other drivers contribute, so they can check the logic, challenge it and act with confidence."
          },
          {
            "t": "p",
            "x": "A forecast that cannot be explained is hard to defend in a planning meeting. When a number looks wrong, teams override it with judgement, and the model stops being used."
          },
          {
            "t": "p",
            "x": "Finance, sales and supply chain also need to agree on the number. Without reasons, each team questions it separately."
          },
          {
            "t": "h",
            "x": "What explainability looks like in practice"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Driver breakdown:",
                "text": "how much of the forecast comes from baseline demand, promotions, price, seasonality and other factors."
              },
              {
                "lead": "Reasons for change:",
                "text": "why this month’s forecast differs from last month’s."
              },
              {
                "lead": "What-if testing:",
                "text": "what happens to demand if a promotion, price or distribution plan changes."
              },
              {
                "lead": "Confidence range:",
                "text": "how certain the model is, not only its best guess."
              }
            ]
          },
          {
            "t": "p",
            "x": "Explainable forecasts are adopted faster, reviewed faster and trusted more. They also improve decisions on promotions and pricing, because the drivers are visible. Intellimark’s Explainable Forecasting Engine is built on this principle."
          }
        ]
      },
      {
        "q": "What is nowcasting and how is it different from forecasting?",
        "a": [
          {
            "t": "p",
            "x": "Nowcasting estimates current demand from the freshest available signals, before complete sales data arrives. Forecasting predicts demand for future periods. Nowcasting answers what is happening this week, and forecasting answers what will happen next quarter. Using both lets FMCG teams react earlier and plan better."
          },
          {
            "t": "h",
            "x": "The difference in plain terms"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Nowcasting:",
                "text": "a current-period estimate built from the latest partial data."
              },
              {
                "lead": "Forecasting:",
                "text": "a prediction for future periods, often weeks or months ahead."
              }
            ]
          },
          {
            "t": "p",
            "x": "Secondary sales and distributor data often arrive late and incomplete. By the time the month closes, it can be too late to fix a slow promotion or a developing stock-out."
          },
          {
            "t": "p",
            "x": "A nowcast gives an early read on how the current period is tracking, so sales and supply teams can correct course while it still counts."
          },
          {
            "t": "p",
            "x": "The nowcast sets the starting point for the forecast. As new data arrives during the period, the nowcast updates and the forecast for coming periods is adjusted. This keeps plans in step with what the market is actually doing."
          }
        ]
      }
    ]
  },
  {
    "topic": "Trade promotion and pricing",
    "items": [
      {
        "q": "What is trade promotion optimization (TPO)?",
        "a": [
          {
            "t": "p",
            "x": "Trade promotion optimization (TPO) uses past promotion results, price and market data to decide which promotions to run, on which products, in which channels and at what depth. The aim is a better return on trade spend, by funding promotions that add profitable volume and cutting those that only shift sales or give away margin."
          },
          {
            "t": "p",
            "x": "Trade spend is one of the largest costs for consumer goods companies, yet many promotions are judged only after they end. Some pull sales forward from the next period, some take sales from the brand’s other products, and some would have sold anyway."
          },
          {
            "t": "h",
            "x": "What TPO involves"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Baseline vs uplift:",
                "text": "separating normal sales from the extra volume a promotion created."
              },
              {
                "lead": "Cannibalisation and pull-forward:",
                "text": "checking whether the gain came from other products or future weeks."
              },
              {
                "lead": "Scenario simulation:",
                "text": "comparing promotion options under a fixed budget before committing."
              },
              {
                "lead": "Profit view:",
                "text": "judging promotions on margin and return, not volume alone."
              }
            ]
          },
          {
            "t": "p",
            "x": "AI learns how much uplift each type of promotion creates for each product, outlet type and region, and forecasts the volume of a planned promotion. That forecast also feeds production and inventory plans, so supply is ready for the promotion."
          }
        ]
      },
      {
        "q": "What is price elasticity modeling and how is it used in FMCG?",
        "a": [
          {
            "t": "p",
            "x": "Price elasticity modeling measures how much demand for a product changes when its price changes. FMCG companies use it to estimate the volume and revenue impact of a price rise, discount or new pack price before acting, so pricing decisions rest on evidence instead of guesswork."
          },
          {
            "t": "p",
            "x": "Elasticity is the percentage change in volume for a one percent change in price. An elasticity of -1.5 means a 1% price increase is expected to reduce volume by about 1.5%. The larger the number, the more sensitive buyers are to price."
          },
          {
            "t": "h",
            "x": "Why FMCG is harder than it looks"
          },
          {
            "t": "ul",
            "x": [
              {
                "text": "Buyers switch to competing brands and to other pack sizes of the same brand."
              },
              {
                "text": "Elasticity differs by region, channel, pack size and outlet type."
              },
              {
                "text": "Promotions and price changes happen together, so their effects must be separated."
              },
              {
                "text": "Elasticity changes over time with inflation, competition and consumer habits."
              }
            ]
          },
          {
            "t": "h",
            "x": "How companies use it"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Price increases:",
                "text": "estimating volume loss and the net effect on revenue and margin."
              },
              {
                "lead": "Pack and price architecture:",
                "text": "choosing price points and pack sizes across the range."
              },
              {
                "lead": "Promotion depth:",
                "text": "deciding how large a discount is worth giving."
              },
              {
                "lead": "Regional pricing:",
                "text": "adjusting where buyers are less or more price sensitive."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "topic": "Store recommendations and field sales app",
    "items": [
      {
        "q": "What is a Suggested Order Quantity (SOQ) and how is it calculated?",
        "a": [
          {
            "t": "p",
            "x": "A Suggested Order Quantity (SOQ) is the quantity of each product a salesperson is advised to offer a retail outlet on a visit. It is calculated from the outlet’s past orders, sell-through, estimated stock, scheme eligibility and local demand, so orders are neither too small to serve the shop nor too large to sell through."
          },
          {
            "t": "p",
            "x": "Order taking often relies on memory and habit. Salesmen miss products the outlet would have bought, and outlets end up out of stock on some items and overstocked on others."
          },
          {
            "t": "h",
            "x": "How an SOQ is calculated"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Inputs:",
                "text": "the outlet’s order history, sales rate, days since the last visit, estimated stock, active schemes and the outlet’s type and location."
              },
              {
                "lead": "Demand estimate:",
                "text": "a model estimates how much of each product the outlet will sell before the next visit."
              },
              {
                "lead": "Adjustment:",
                "text": "estimated stock is subtracted, and the result is rounded to case or pack sizes."
              },
              {
                "lead": "Rules:",
                "text": "scheme conditions, product availability and credit limits are applied."
              }
            ]
          },
          {
            "t": "p",
            "x": "The suggestion appears in the field sales app at order time. The salesman can accept or change it, and those choices help the model improve."
          },
          {
            "t": "p",
            "x": "Better suggestions mean more products ordered per call, fewer stock-outs at the outlet and a more balanced stock position at the distributor."
          }
        ]
      },
      {
        "q": "How does an AI recommendation engine work for FMCG stores?",
        "a": [
          {
            "t": "p",
            "x": "An AI recommendation engine for FMCG stores studies each outlet’s buying history, similar outlets, local demand and available schemes to suggest what the sales representative should offer, such as which products to add, which quantities to raise and which scheme to push. The goal is a better order from every visit."
          },
          {
            "t": "h",
            "x": "What it recommends"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Assortment gaps:",
                "text": "products that similar outlets sell well and this outlet does not stock."
              },
              {
                "lead": "Quantities:",
                "text": "how much of each product to offer, through a Suggested Order Quantity."
              },
              {
                "lead": "Upsell and cross-sell:",
                "text": "larger packs, higher-value variants or complementary products."
              },
              {
                "lead": "Schemes:",
                "text": "which trade scheme or incentive is most relevant to the outlet."
              }
            ]
          },
          {
            "t": "p",
            "x": "The engine groups outlets that are alike in type, area and buying behaviour. It finds what comparable outlets buy that this one does not, and scores each possible suggestion by its expected value."
          },
          {
            "t": "p",
            "x": "Business rules are then applied, such as product availability, margin and company priorities, and the top suggestions are shown to the representative."
          },
          {
            "t": "h",
            "x": "What makes it get used"
          },
          {
            "t": "ul",
            "x": [
              {
                "text": "A short reason with each suggestion, so the salesman understands it."
              },
              {
                "text": "A simple screen in the field sales app, with only the few suggestions that matter."
              },
              {
                "text": "A feedback loop, so accepted and rejected suggestions improve future ones."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "topic": "Beat planning and field sales",
    "items": [
      {
        "q": "How do you optimise beat plans for FMCG sales teams?",
        "a": [
          {
            "t": "p",
            "x": "To optimise a beat plan, group outlets into routes using their sales potential, visit frequency needs and location, then sequence the visits to cut travel time and balance the workload across salesmen. Outlets with higher potential get more frequent visits, and the plan is reviewed regularly as outlets and territories change."
          },
          {
            "t": "p",
            "x": "Classify outlets by current sales, growth potential and assortment gaps, then set a visit frequency for each class. A high-potential outlet may need weekly visits while a small, stable one needs fewer."
          },
          {
            "t": "h",
            "x": "Build balanced routes"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Geography and travel time:",
                "text": "group nearby outlets so less time is spent on the road."
              },
              {
                "lead": "Working hours and visit time:",
                "text": "make sure each beat fits a working day."
              },
              {
                "lead": "Workload balance:",
                "text": "avoid some salesmen carrying far more outlets or potential than others."
              },
              {
                "lead": "Distributor coverage:",
                "text": "align beats with the distributor’s delivery and billing cycle."
              }
            ]
          },
          {
            "t": "p",
            "x": "Track visit compliance, productive calls and sales per visit. Update the plan when outlets open or close, when territories change and when outlet behaviour shifts."
          },
          {
            "t": "h",
            "x": "Mistakes to avoid"
          },
          {
            "t": "ul",
            "x": [
              {
                "text": "Visiting every outlet equally often."
              },
              {
                "text": "Keeping the same beats for years."
              },
              {
                "text": "Planning on straight-line distance instead of real travel time."
              }
            ]
          }
        ]
      },
      {
        "q": "What is Next Best Action in sales and how does it work?",
        "a": [
          {
            "t": "p",
            "x": "Next Best Action (NBA) in sales is a system that recommends the most valuable action for a salesperson to take at a given outlet or moment, such as which products to pitch, which scheme to explain or which outlet to visit first. It ranks the possible actions by expected value, using data about the outlet, the products and past results."
          },
          {
            "t": "h",
            "x": "How it works"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "List the options:",
                "text": "possible actions for the outlet, such as adding a product, raising a quantity or explaining a scheme."
              },
              {
                "lead": "Estimate value:",
                "text": "a model predicts how much each action is likely to add."
              },
              {
                "lead": "Rank and filter:",
                "text": "business rules, such as stock availability and priorities, are applied."
              },
              {
                "lead": "Show the top few, with reasons:",
                "text": "the salesman sees one to three actions and why they were chosen."
              }
            ]
          },
          {
            "t": "p",
            "x": "An outlet buys biscuits and tea regularly but does not stock a newly launched pack that similar outlets in the area sell well. The system suggests adding that pack, with a quantity and a relevant scheme, and shows the reason."
          },
          {
            "t": "h",
            "x": "What it needs"
          },
          {
            "t": "ul",
            "x": [
              {
                "text": "Outlet-level transaction history."
              },
              {
                "text": "Product and scheme details."
              },
              {
                "text": "Visit records."
              },
              {
                "text": "Feedback on which suggestions were accepted and what happened next."
              }
            ]
          },
          {
            "t": "p",
            "x": "Showing too many actions, giving no reasons and having no feedback loop are the usual reasons field teams ignore the recommendations."
          }
        ]
      }
    ]
  },
  {
    "topic": "Root cause analysis (RCA)",
    "items": [
      {
        "q": "Why did secondary sales drop and how do you find the cause?",
        "a": [
          {
            "t": "p",
            "x": "To find why secondary sales dropped, break the decline down by product, region, channel and outlet, then test each possible driver in turn: distribution and availability, price, promotions, competitor activity, field execution and demand shifts. The cause is the factor that explains most of the drop once the others are accounted for."
          },
          {
            "t": "h",
            "x": "Step 1: Locate the drop"
          },
          {
            "t": "p",
            "x": "Find where the decline sits. Is it concentrated in a few SKUs, regions or channels, or spread evenly? Check whether fewer outlets are buying, or each outlet is buying less."
          },
          {
            "t": "h",
            "x": "Step 2: Test the likely drivers"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Distribution and availability:",
                "text": "outlets covered, stock-outs and delivery gaps."
              },
              {
                "lead": "Price:",
                "text": "your price compared with competitors, and any recent change."
              },
              {
                "lead": "Promotions:",
                "text": "fewer, smaller or later promotions than the same period last year."
              },
              {
                "lead": "Field execution:",
                "text": "changes in beat coverage, visit frequency or team strength."
              },
              {
                "lead": "Market factors:",
                "text": "seasonality, competitor launches and external events."
              }
            ]
          },
          {
            "t": "h",
            "x": "Step 3: Quantify and act"
          },
          {
            "t": "p",
            "x": "Estimate how much of the decline each factor explains, then rank them by size and by how easily they can be fixed. Start with the largest fixable cause."
          }
        ]
      },
      {
        "q": "What is the difference between a dashboard and root cause analysis (RCA)?",
        "a": [
          {
            "t": "p",
            "x": "A dashboard shows what happened, such as sales down in a region. Root cause analysis (RCA) explains why it happened and how much each factor contributed. Dashboards are good for monitoring. RCA is what a team needs when a number moves and they must decide what to fix."
          },
          {
            "t": "p",
            "x": "Dashboards track results over time, compare regions and products, and flag when something moves. They are the right tool for keeping an eye on the business."
          },
          {
            "t": "p",
            "x": "When a number drops, the user has to guess the reason and slice the data by hand, one cut at a time. Two factors that moved together can look alike, and it is hard to tell which one caused the change."
          },
          {
            "t": "h",
            "x": "What RCA adds"
          },
          {
            "t": "ul",
            "x": [
              {
                "text": "It systematically tests the possible drivers instead of relying on guesses."
              },
              {
                "text": "It measures how much of the change each driver explains."
              },
              {
                "text": "It ranks causes by impact, so effort goes to the largest ones."
              },
              {
                "text": "It points to the action that is likely to help."
              }
            ]
          },
          {
            "t": "p",
            "x": "The dashboard raises the flag, RCA explains the cause, and the actions taken are tracked back on the dashboard."
          }
        ]
      }
    ]
  },
  {
    "topic": "Marketing and retail growth",
    "items": [
      {
        "q": "What is marketing mix modelling and when do you need it?",
        "a": [
          {
            "t": "p",
            "x": "Marketing mix modelling (MMM) is a statistical method that estimates how much each marketing activity, such as TV, digital, trade and promotions, contributes to sales, after accounting for price, seasonality and distribution. Brands use it to decide where to move budget and what return to expect from the next rupee spent."
          },
          {
            "t": "h",
            "x": "What MMM answers"
          },
          {
            "t": "ul",
            "x": [
              {
                "text": "Which channels are driving sales and which are not."
              },
              {
                "text": "What return each channel gives for its spend."
              },
              {
                "text": "Where moving budget would add the most."
              },
              {
                "text": "What the expected result of a new budget plan is."
              }
            ]
          },
          {
            "t": "h",
            "x": "When you need it"
          },
          {
            "t": "ul",
            "x": [
              {
                "text": "You spend across several channels and cannot tell which works."
              },
              {
                "text": "Marketing budgets are large enough that a better split matters."
              },
              {
                "text": "You need evidence to defend or change a budget."
              },
              {
                "text": "User-level tracking is limited and you need a method that works with aggregate data."
              }
            ]
          },
          {
            "t": "p",
            "x": "Returns diminish as spend rises in a channel. A good model captures this, so it can show the point where more spending adds little and money is better used elsewhere. Intellimark’s Non-Linear Marketing Investment Planner is built around this idea."
          },
          {
            "t": "p",
            "x": "MMM needs enough history and enough variation in spend to learn from. It works best alongside controlled tests, and it should be refreshed regularly as the market changes."
          }
        ]
      },
      {
        "q": "How do you grow sales in specific micro-markets or pin codes?",
        "a": [
          {
            "t": "p",
            "x": "To grow sales in micro-markets, estimate the sales potential of each pin code or small area, compare it with current sales to find the biggest gaps, and then match distribution, visit frequency and marketing spend to those gaps. City or state averages hide where the real opportunity sits."
          },
          {
            "t": "p",
            "x": "Demand varies from one neighbourhood to the next. A region that looks healthy overall can contain areas with large untapped potential next to areas that are already saturated."
          },
          {
            "t": "h",
            "x": "How to size local potential"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Local demand signals:",
                "text": "population, household and income patterns, and category consumption."
              },
              {
                "lead": "Retail landscape:",
                "text": "the number and type of outlets, and competitor presence."
              },
              {
                "lead": "Your own sales:",
                "text": "current sales and coverage in the area."
              },
              {
                "lead": "Headroom:",
                "text": "the gap between potential and actual sales, which shows where to focus."
              }
            ]
          },
          {
            "t": "h",
            "x": "Turn the gaps into action"
          },
          {
            "t": "ul",
            "x": [
              {
                "text": "Add outlets or distributor coverage where potential is high and presence is low."
              },
              {
                "text": "Raise visit frequency on beats in high-headroom areas."
              },
              {
                "text": "Run local promotions and marketing where they will be most effective."
              },
              {
                "text": "Adjust the product range to local demand."
              }
            ]
          },
          {
            "t": "p",
            "x": "Compare sales growth in focus areas with similar areas that were not targeted, so you know what the effort achieved. Intellimark’s Micro-Geography Retail Growth Engine supports this approach."
          }
        ]
      }
    ]
  }
];

// Map each topic to an icon and short badge
const TOPIC_CONFIG: Record<string, { label: string; icon: React.ElementType }> = {
  'Production planning and supply chain': {
    label: 'Production & Supply Chain',
    icon: Layers,
  },
  'Demand forecasting and nowcasting': {
    label: 'Demand Forecasting',
    icon: BrainCircuit,
  },
  'Trade promotion and pricing': {
    label: 'Trade Promotion & Pricing',
    icon: TrendingUp,
  },
  'Store recommendations and field sales app': {
    label: 'Store Recommendations',
    icon: BarChart3,
  },
  'Beat planning and field sales': {
    label: 'Beat Planning',
    icon: Calendar,
  },
  'Root cause analysis (RCA)': {
    label: 'Root Cause Analysis',
    icon: HelpCircle,
  },
  'Marketing and retail growth': {
    label: 'Marketing & Retail Growth',
    icon: Sparkles,
  },
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const getPlainTextAnswer = (item: QAItem): string => {
  return item.a
    .map((block) => {
      if (block.t === 'p') return block.x;
      if (block.t === 'h') return `${block.x}:`;
      if (block.t === 'ul') {
        return block.x.map((li) => (li.lead ? `${li.lead} ${li.text}` : li.text)).join('; ');
      }
      return '';
    })
    .join(' ');
};

interface IntellimarkQAProps {
  title?: string;
}

export default function IntellimarkQA({ title = 'Questions and Answers' }: IntellimarkQAProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (qText: string) => {
    const slug = slugify(qText);
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(slug);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Filter topics and items based on search query and selected topic
  const filteredData = useMemo(() => {
    const qLower = searchQuery.toLowerCase().trim();

    return DATA.map((group) => {
      if (selectedTopic !== 'All' && group.topic !== selectedTopic) {
        return null;
      }

      if (!qLower) {
        return group;
      }

      const matchingItems = group.items.filter((item) => {
        const inQuestion = item.q.toLowerCase().includes(qLower);
        const inTopic = group.topic.toLowerCase().includes(qLower);
        const inAnswer = item.a.some((block) => {
          if (block.t === 'p' || block.t === 'h') {
            return block.x.toLowerCase().includes(qLower);
          }
          if (block.t === 'ul') {
            return block.x.some(
              (li) =>
                (li.lead && li.lead.toLowerCase().includes(qLower)) ||
                li.text.toLowerCase().includes(qLower)
            );
          }
          return false;
        });

        return inQuestion || inTopic || inAnswer;
      });

      if (matchingItems.length === 0) return null;

      return {
        ...group,
        items: matchingItems,
      };
    }).filter(Boolean) as QAGroup[];
  }, [searchQuery, selectedTopic]);

  const totalQuestions = useMemo(() => {
    return filteredData.reduce((acc, g) => acc + g.items.length, 0);
  }, [filteredData]);

  // Schema.org FAQPage Structured Data for Google & AI Crawlers
  const faqSchema = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: DATA.flatMap((group) =>
        group.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: getPlainTextAnswer(item),
          },
        }))
      ),
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24 text-slate-800">
      <Helmet>
        <title>Questions & Answers: AI in FMCG, Forecasting & Supply Chain | Intellimark AI</title>
        <meta
          name="description"
          content="Comprehensive executive Q&A on AI demand forecasting, SKU-level production planning, trade promotion optimization (TPO), suggested order quantities (SOQ), beat planning, and root cause analysis."
        />
        <meta
          property="og:title"
          content="Questions & Answers: AI in FMCG & Supply Chain - Intellimark AI"
        />
        <meta
          property="og:description"
          content="Explore expert answers on AI-driven demand forecasting, trade spend optimization, beat planning, and revenue growth management."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Header Section - Intellimark AI Branded Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Glow Accents */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gradient-to-r from-blue-600/25 via-purple-600/30 to-pink-600/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center space-x-2 text-sm text-purple-200/90 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/#resources" className="hover:text-white transition-colors">
              Resources Hub
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Questions & Answers</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 mb-6 text-sm text-purple-100 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span>Intellimark AI • Executive Q&A Knowledge Base</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            {title}
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              FMCG Planning, Forecasting & Field Sales
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Clear, authoritative answers explaining how Explainable AI improves SKU demand forecasts,
            optimizes trade promotions, automates Suggested Order Quantities, and unlocks revenue growth.
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions or keywords (e.g. SKU, TPO, nowcasting, SOQ, RCA)..."
                className="w-full pl-12 pr-10 py-4 bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 rounded-2xl shadow-2xl text-base focus:outline-none focus:ring-4 focus:ring-purple-400/40 border border-white/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-sm text-purple-200 mt-3 text-left pl-2">
                Showing {totalQuestions} {totalQuestions === 1 ? 'question' : 'questions'} for "{searchQuery}"
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        {/* Topic Filter Pills */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-5 mb-10">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Filter by Topic ({DATA.length} Domains)
            </span>
            {selectedTopic !== 'All' && (
              <button
                onClick={() => setSelectedTopic('All')}
                className="text-xs font-semibold text-purple-600 hover:text-purple-800 transition-colors"
              >
                Reset Filter
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTopic('All')}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                selectedTopic === 'All'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-purple-500/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
              }`}
            >
              All Topics ({DATA.reduce((acc, g) => acc + g.items.length, 0)})
            </button>
            {DATA.map((group) => {
              const cfg = TOPIC_CONFIG[group.topic];
              const isSelected = selectedTopic === group.topic;
              return (
                <button
                  key={group.topic}
                  onClick={() => setSelectedTopic(group.topic)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center space-x-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-purple-500/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                  }`}
                >
                  {cfg && <cfg.icon className="w-3.5 h-3.5 opacity-80" />}
                  <span>{cfg ? cfg.label : group.topic}</span>
                  <span
                    className={`text-xs ml-1 px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {group.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <HelpCircle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No matching questions found</h3>
            <p className="text-slate-600 max-w-md mx-auto mb-6">
              We couldn't find any questions matching "{searchQuery}". Try searching for terms like
              "forecast", "promotion", "pricing", "nowcasting", or "beat".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTopic('All');
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              View All Questions
            </button>
          </div>
        )}

        {/* Q&A Topics List */}
        <div className="space-y-16">
          {filteredData.map((group, groupIdx) => {
            const topicCfg = TOPIC_CONFIG[group.topic];
            const TopicIcon = topicCfg?.icon || Layers;

            return (
              <section
                key={group.topic}
                id={slugify(group.topic)}
                className="scroll-mt-28"
              >
                {/* Topic Header with Intellimark Theme Bar */}
                <div className="flex items-center space-x-4 pb-4 border-b-2 border-purple-200/80 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20 flex-shrink-0">
                    <TopicIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                      Topic 0{groupIdx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {group.topic}
                    </h2>
                  </div>
                </div>

                {/* Questions under this Topic */}
                <div className="space-y-8">
                  {group.items.map((item, itemIdx) => {
                    const itemSlug = slugify(item.q);
                    const isCopied = copiedId === itemSlug;

                    return (
                      <article
                        key={item.q}
                        id={itemSlug}
                        className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 scroll-mt-28 relative overflow-hidden"
                      >
                        {/* Top Accent Strip */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Question Title & Actions */}
                        <div className="flex items-start justify-between gap-4 mb-6">
                          <div className="flex items-start space-x-3 sm:space-x-4">
                            <span className="inline-flex items-center justify-center px-3 py-1 rounded-xl bg-purple-100 text-purple-700 font-bold text-sm sm:text-base border border-purple-200/60 mt-0.5 flex-shrink-0">
                              Q{itemIdx + 1}.
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                              {item.q}
                            </h3>
                          </div>

                          {/* Copy Link to Question */}
                          <button
                            onClick={() => handleCopyLink(item.q)}
                            title="Copy link to this question"
                            className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors flex-shrink-0 relative"
                            aria-label="Copy link to question"
                          >
                            {isCopied ? (
                              <Check className="w-5 h-5 text-emerald-600" />
                            ) : (
                              <Share2 className="w-5 h-5" />
                            )}
                            {isCopied && (
                              <span className="absolute -top-8 right-0 bg-slate-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-md">
                                Link copied!
                              </span>
                            )}
                          </button>
                        </div>

                        {/* Answer Content Blocks */}
                        <div className="space-y-4 text-slate-700 text-base sm:text-[17px] leading-relaxed">
                          {item.a.map((block, blockIdx) => {
                            // Subheading block
                            if (block.t === 'h') {
                              return (
                                <h4
                                  key={blockIdx}
                                  className="text-lg font-bold text-purple-950 mt-6 pt-2 mb-2 flex items-center space-x-2"
                                >
                                  <span className="w-1.5 h-4 rounded-full bg-purple-600 inline-block mr-2" />
                                  <span>{block.x}</span>
                                </h4>
                              );
                            }

                            // Bullet list block
                            if (block.t === 'ul') {
                              return (
                                <ul key={blockIdx} className="space-y-2.5 my-3 pl-1 sm:pl-3">
                                  {block.x.map((li, liIdx) => (
                                    <li key={liIdx} className="flex items-start space-x-3">
                                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                      <span className="text-slate-700">
                                        {li.lead && (
                                          <strong className="text-slate-900 font-semibold mr-1.5">
                                            {li.lead}
                                          </strong>
                                        )}
                                        {li.text}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              );
                            }

                            // First paragraph: The Executive Lead Answer (A1, A2...)
                            if (blockIdx === 0) {
                              return (
                                <div
                                  key={blockIdx}
                                  className="bg-gradient-to-r from-purple-50/90 to-indigo-50/60 border border-purple-200/80 rounded-2xl p-5 sm:p-6 text-slate-900 font-medium leading-relaxed shadow-sm mb-4"
                                >
                                  <div className="flex items-start space-x-3">
                                    <span className="text-purple-700 font-bold text-sm bg-purple-100 border border-purple-300/80 px-2.5 py-0.5 rounded-lg flex-shrink-0 mt-0.5">
                                      A{itemIdx + 1}.
                                    </span>
                                    <p className="flex-1 text-[17px] text-slate-800 leading-relaxed font-normal">
                                      {block.x}
                                    </p>
                                  </div>
                                </div>
                              );
                            }

                            // Remaining paragraphs
                            return (
                              <p key={blockIdx} className="text-slate-700 leading-relaxed">
                                {block.x}
                              </p>
                            );
                          })}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA Card - Aligned with Intellimark AI Brand Theme */}
        <section className="mt-20 bg-gradient-to-r from-slate-900 via-purple-950 to-indigo-950 text-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-purple-500/20 text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl mx-auto">
            <span className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-purple-200 font-semibold mb-6">
              Empower Your S&OP and Revenue Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
              Ready to implement AI in your supply chain & revenue planning?
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
              Connect directly with our enterprise AI specialists to see how Intellimark's
              Explainable AI models can optimize your demand forecasts, trade spend, and field sales recommendations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://outlook.office.com/bookwithme/user/e8ee839cd0224fb7bbc88d3de0f0e74a@intellimark.ai/meetingtype/X5VsiCFLD0O0S7V9WOBTyQ2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Talk to an Expert</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <Link
                to="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-slate-500/60 hover:border-white text-slate-200 hover:text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all duration-300"
              >
                <span>Explore Case Studies</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <Link
                to="/#resources"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-slate-400 hover:text-white px-4 py-4 rounded-xl text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Back to Resources Hub</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
