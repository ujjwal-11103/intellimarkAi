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

export const QA_DATA: QAGroup[] = [
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
