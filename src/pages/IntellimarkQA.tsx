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
  X,
  Target
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
      },
      {
        "q": "How does demand forecasting for FMCG and AI sales forecasting in India handle seasonality?",
        "a": [
          {
            "t": "p",
            "x": "Demand forecasting for FMCG uses multi-level machine learning models to predict SKU-level consumer demand across depots, distributors, and channels. In India, AI sales forecasting accounts for hyper-local festivals (Diwali, Eid, Puja), seasonal monsoons, agricultural harvest cycles, and localized distributor stocking patterns to reduce forecast errors by up to 30%."
          },
          {
            "t": "h",
            "x": "Key drivers in AI sales forecasting for India"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Dynamic festival calendars:",
                "text": "capturing moving lunar and regional festival dates that alter consumer purchasing spikes year-on-year."
              },
              {
                "lead": "Real-time nowcasting:",
                "text": "sensing early distributor replenishment orders to spot stock-outs weeks before month-end."
              },
              {
                "lead": "Hierarchical coherence:",
                "text": "ensuring SKU x store forecasts mathematically reconcile with national brand and supply chain production targets."
              },
              {
                "lead": "Explainable AI forecasting:",
                "text": "providing commercial and S&OP planners with transparent feature importance for every predicted quantity."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "topic": "Trade promotion and pricing",
    "items": [
      {
        "q": "What is revenue growth management for CPG and how does RGM software work?",
        "a": [
          {
            "t": "p",
            "x": "Revenue growth management for CPG is the disciplined practice of maximizing revenue and gross margin by optimizing price points, trade promotion investments, pack architecture, and mix. RGM software uses machine learning and price elasticity modeling to simulate scenarios before execution, ensuring commercial teams fund profitable volume rather than giving away margin."
          },
          {
            "t": "h",
            "x": "Core pillars of enterprise RGM software"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Strategic pricing:",
                "text": "simulating price elasticity and cross-brand switching across channels and pack sizes."
              },
              {
                "lead": "Trade promotion optimization (TPO):",
                "text": "evaluating true baseline vs incremental lift, eliminating unprofitable discount schemes."
              },
              {
                "lead": "Price-pack architecture:",
                "text": "identifying margin-accretive price ladders and bridge packs for diverse consumer segments."
              },
              {
                "lead": "Commercial scenario planning:",
                "text": "testing what-if revenue and margin impacts before signing annual trade terms."
              }
            ]
          },
          {
            "t": "p",
            "x": "Intellimark AI delivers an enterprise RGM software suite that re-engineers trade terms and pricing strategies with explainable AI for consumer goods companies."
          }
        ]
      },
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
        "q": "What is beat planning software and how does it drive field sales force optimization?",
        "a": [
          {
            "t": "p",
            "x": "Beat planning software is an AI-powered field sales platform that designs and optimizes daily sales routes for FMCG field sales representatives. By combining retailer transaction history, store sales potential, and geo-spatial travel networks, it achieves field sales force optimization by maximizing productive calls, increasing order sizes, and cutting transit time."
          },
          {
            "t": "h",
            "x": "Key benefits of beat planning software"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Dynamic route sequencing:",
                "text": "orders retail visits in the shortest real-world driving or walking order rather than straight-line estimates."
              },
              {
                "lead": "Workload balancing:",
                "text": "ensures sales reps manage balanced outlet counts and revenue potential across urban and rural beats."
              },
              {
                "lead": "Territory alignment:",
                "text": "harmonizes salesman beats with local distributor coverage and delivery fulfillment schedules."
              },
              {
                "lead": "Adherence tracking:",
                "text": "monitors actual field visits against planned beats to eliminate ghost calls and improve compliance."
              }
            ]
          }
        ]
      },
      {
        "q": "How does beat optimization for FMCG work with a salesman beat plan in India?",
        "a": [
          {
            "t": "p",
            "x": "Beat optimization for FMCG in India structures salesman beat plans around outlet classification (Gold, Silver, Bronze), local market congestion, kirana operating hours, and distributor credit cycles. High-potential outlets are visited weekly, while smaller rural outlets receive bi-weekly or monthly visits, ensuring sales teams spend their working day where revenue headroom is highest."
          },
          {
            "t": "h",
            "x": "Tailoring a salesman beat plan in India"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Kirana & wholesale separation:",
                "text": "splitting morning wholesale market visits from afternoon residential neighborhood retail coverage."
              },
              {
                "lead": "Real transit networks:",
                "text": "factoring in Indian urban traffic and semi-urban road infrastructure to avoid impossible schedules."
              },
              {
                "lead": "Distributor billing alignment:",
                "text": "timing order booking to match local distributor dispatch and credit clearing cycles."
              }
            ]
          },
          {
            "t": "p",
            "x": "Intellimark AI’s beat optimization engine balances workload, cuts travel distance by up to 25%, and prevents common field execution mistakes."
          }
        ]
      },
      {
        "q": "What is next best action for sales reps and how does route optimization for sales teams work?",
        "a": [
          {
            "t": "p",
            "x": "Next best action for sales reps is an intelligent recommendation engine in the field sales app that guides the salesman on exactly what to pitch at every outlet visit—including suggested order quantities (SOQ), high-margin cross-sells, and eligible trade schemes. Paired with route optimization for sales teams, reps follow the optimal physical path and pitch the most profitable products."
          },
          {
            "t": "h",
            "x": "How Next Best Action works in the field"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Pattern matching:",
                "text": "identifying SKUs bought by lookalike outlets in the same pincode that this store has not yet ordered."
              },
              {
                "lead": "Suggested order quantities (SOQ):",
                "text": "predicting run-out rates so the store doesn't face stock-outs before the next scheduled visit."
              },
              {
                "lead": "Targeted scheme prompts:",
                "text": "highlighting the single most attractive discount or incentive scheme to maximize basket size."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "topic": "Root cause analysis (RCA)",
    "items": [
      {
        "q": "Why did secondary sales drop and how does root cause analysis for sales decline work?",
        "a": [
          {
            "t": "p",
            "x": "When secondary sales drop, root cause analysis for sales decline systematically diagnoses whether the decline stems from distribution voids, out-of-stock SKUs at distributor points, price disparity vs competitors, delayed trade promotions, or lapsed salesman beat visits. Rather than manual guesswork, automated RCA isolates the single factor contributing the largest percentage of volume decline."
          },
          {
            "t": "h",
            "x": "Step 1: Dissect the drop across dimensions"
          },
          {
            "t": "p",
            "x": "Isolate where the decline is concentrated: specific SKUs, brand packs, regions, wholesale vs modern trade, or retailer classes. Pinpoint whether fewer outlets bought (breadth) or outlets bought smaller quantities (depth)."
          },
          {
            "t": "h",
            "x": "Step 2: Attribute drivers with RCA analytics"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Distribution & stock-outs:",
                "text": "measuring billing gaps, distributor de-stocking, and depot stock-outs."
              },
              {
                "lead": "Pricing & competition:",
                "text": "comparing retailer margins and recent price increases against aggressive competitor schemes."
              },
              {
                "lead": "Trade promotions:",
                "text": "evaluating whether fewer, delayed, or poorly funded schemes reduced retailer willingness to order."
              },
              {
                "lead": "Field sales execution:",
                "text": "tracking drop-offs in beat compliance, productive calls, or sales representative churn."
              }
            ]
          },
          {
            "t": "p",
            "x": "Intellimark AI's RCA analytics automates this audit within hours instead of weeks, directing commercial leaders straight to the corrective action."
          }
        ]
      },
      {
        "q": "What is RCA analytics for FMCG and how does sales variance analysis explain volume drops?",
        "a": [
          {
            "t": "p",
            "x": "RCA analytics for FMCG couples machine learning diagnostics with sales variance analysis to mathematically decompose sales performance against target. Sales variance analysis separates the total variance into Volume Variance (units sold), Price Variance (realized unit realization), Product Mix Variance (skew toward lower-margin SKUs), and Trade Spend Variance (scheme payout over-expenditure)."
          },
          {
            "t": "h",
            "x": "Four components of sales variance analysis"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Volume variance:",
                "text": "evaluates revenue lost purely due to lower unit sales compared to budget."
              },
              {
                "lead": "Price variance:",
                "text": "calculates financial impact from discounting, unauthorized trade deals, or price revisions."
              },
              {
                "lead": "Mix variance:",
                "text": "quantifies margin erosion when consumers or retailers switch to smaller or lower-margin packs."
              },
              {
                "lead": "Channel variance:",
                "text": "identifies margin dilution occurring when volume shifts between general trade, e-commerce, and modern trade."
              }
            ]
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
        "q": "What is marketing mix modelling for CPG and how does it drive marketing investment optimization?",
        "a": [
          {
            "t": "p",
            "x": "Marketing mix modelling for CPG is an econometric approach that measures the incremental sales uplift generated by each media channel (TV, YouTube, Meta, OOH, print, and trade spend) while controlling for baseline factors like price, seasonality, and distribution. It guides marketing investment optimization by charting diminishing marginal return curves so brands invest where the next marketing rupee delivers the highest return."
          },
          {
            "t": "h",
            "x": "Strategic outputs of marketing investment optimization"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Channel contribution:",
                "text": "identifying which marketing vehicles generate genuine baseline expansion versus temporary spikes."
              },
              {
                "lead": "Diminishing returns curves:",
                "text": "pinpointing saturation thresholds where additional ad spend loses profitability."
              },
              {
                "lead": "Budget reallocation simulator:",
                "text": "simulating shifts between trade spend, performance marketing, and branding to maximize total ROI."
              },
              {
                "lead": "Cookie-less attribution:",
                "text": "operating strictly on aggregated sales and spend data, making it immune to user tracking restrictions."
              }
            ]
          },
          {
            "t": "p",
            "x": "Intellimark AI’s Non-Linear Marketing Investment Planner helps consumer brands dynamically rebalance multimillion-dollar budgets with high confidence."
          }
        ]
      },
      {
        "q": "What is retail growth analytics and how does it drive performance marketing optimization?",
        "a": [
          {
            "t": "p",
            "x": "Retail growth analytics uses micro-geography demographic signals, category penetration indices, and distributor billing histories to calculate untapped market potential down to specific pin codes and neighborhoods. Connected to performance marketing optimization, it enables hyper-local digital campaigns that drive verified footfall and velocity into localized retail stores."
          },
          {
            "t": "h",
            "x": "How to size local potential and headroom"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Micro-market demand signals:",
                "text": "population, household income distributions, and category consumption indices."
              },
              {
                "lead": "Retail landscape:",
                "text": "total outlet universe density and competitor distribution footprint."
              },
              {
                "lead": "Headroom analysis:",
                "text": "quantifying the gap between current brand sales and total category potential to prioritize field resources."
              }
            ]
          },
          {
            "t": "p",
            "x": "Intellimark’s Micro-Geography Retail Growth Engine enables CPG brands to target expansion where sales headroom is highest."
          }
        ]
      }
    ]
  },
  {
    "topic": "Brand and company overview",
    "items": [
      {
        "q": "What is Intellimark AI and how does it operate as a leading CPG analytics company in India?",
        "a": [
          {
            "t": "p",
            "x": "Intellimark AI is an enterprise CPG analytics company in India delivering advanced AI analytics for consumer goods companies globally. The platform powers revenue growth management (RGM software), explainable AI demand forecasting, salesman beat planning software, root cause analysis (RCA), and store assortment recommendation engines."
          },
          {
            "t": "h",
            "x": "Why consumer enterprises choose Intellimark AI"
          },
          {
            "t": "ul",
            "x": [
              {
                "lead": "Explainable AI (XAI):",
                "text": "transparent models that explain exact demand and pricing drivers instead of untrusted black-box outputs."
              },
              {
                "lead": "Built for CPG & FMCG complexity:",
                "text": "purpose-built for multi-tier distribution networks, wholesale channels, modern trade, and Indian kirana retail."
              },
              {
                "lead": "Enterprise-grade ROI:",
                "text": "proven deployments delivering up to 30% forecast accuracy gains, 25% field transit reductions, and over $50M in unlocked revenue."
              }
            ]
          },
          {
            "t": "p",
            "x": "Intellimark AI is headquartered in India with client deployments across North America, Southeast Asia, and India."
          }
        ]
      },
      {
        "q": "Why do consumer goods enterprises choose Intellimark AI for AI analytics?",
        "a": [
          {
            "t": "p",
            "x": "Consumer goods companies choose Intellimark AI because our models are explainable, actionable, and seamlessly integrated with enterprise ERPs (SAP, Oracle) and Sales Force Automation (SFA) apps. Commercial leaders use our interactive simulators to test price changes, trade schemes, and beat plans before committing capital."
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
  'Brand and company overview': {
    label: 'About Intellimark AI',
    icon: Target,
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
        <title>Questions & Answers: AI in FMCG, Beat Planning, RCA & Forecasting | Intellimark AI</title>
        <meta
          name="description"
          content="Authoritative executive Q&A on beat planning software, FMCG beat optimization, route optimization for sales teams, root cause analysis for sales decline, RGM software, explainable AI forecasting, and marketing mix modelling."
        />
        <meta
          name="keywords"
          content="beat planning software, beat optimization for FMCG, route optimization for sales teams, field sales force optimization, next best action for sales reps, salesman beat plan India, root cause analysis for sales decline, RCA analytics for FMCG, why did secondary sales drop, sales variance analysis, revenue growth management for CPG, RGM software, explainable AI forecasting, demand forecasting for FMCG, AI sales forecasting India, marketing mix modelling for CPG, marketing investment optimization, retail growth analytics, performance marketing optimization, Intellimark AI, CPG analytics company India, AI analytics for consumer goods companies"
        />
        <link rel="canonical" href="https://www.intellimark.ai/qa" />
        <meta
          property="og:title"
          content="Questions & Answers: AI in FMCG, Beat Planning, RCA & Forecasting | Intellimark AI"
        />
        <meta
          property="og:description"
          content="Authoritative executive Q&A on beat planning software, FMCG beat optimization, root cause analysis for sales decline, RGM software, and explainable AI forecasting."
        />
        <meta property="og:url" content="https://www.intellimark.ai/qa" />
        <meta property="og:type" content="website" />
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
