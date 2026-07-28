---
name: flight-fare-and-baggage-auditor
description: Audits flight schedules, price fluctuations, cancellation penalties, and baggage allowances for Indian and Himalayan corridors (DEL, KTM, IXB).
---

# Flight Fare, Cancellation & Baggage Auditor

This skill provides automated auditing of flight manifests across Indian and Himalayan corridors (Delhi, Kathmandu, Bagdogra, Leh).

---

## ✈️ 1. Standard Airline Specifications Matrix

| Airline | Sector | Check-in Baggage | Cabin Baggage | Standard Cancellation Fee |
| :--- | :--- | :--- | :--- | :--- |
| **IndiGo (6E)** | International (DEL ↔ KTM) | 20 kg (1 PC) | 7 kg (1 PC) | ₹1,600 – ₹2,200 (or Non-Refundable) |
| **IndiGo (6E)** | Domestic (DEL ↔ IXB) | 15 kg (1 PC) | 7 kg (1 PC) | ₹900 / person |
| **Air India (AI)** | International (DEL ↔ KTM) | 25 kg (2 PC max) | 7 kg (1 PC) | ₹1,600 / person |
| **Nepal Airlines (RA)** | International (DEL ↔ KTM) | 30 kg (2 PC) | 7 kg (1 PC) | ₹3,800 or NPR 4,000 (~₹2,500) |
| **Air India Express (IX)** | Domestic (DEL ↔ IXB) | 15 kg (1 PC) | 7 kg (1 PC) | ₹700 / person |

---

## 📊 2. Fare Tracking Protocol

- Track price variations across booking review windows (e.g. 25-Jul vs 27-Jul).
- Flag non-refundable fare classes explicitly before confirming booking locks.
- Calculate net refund values after subtracting cancellation penalties.
