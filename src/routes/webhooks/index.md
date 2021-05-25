---
layout: product
title: Webhooks
desc: Webhooks doc
tree: |-
  webhooks

  \| sub nav

    nav 2 | This is Nav 2
---
# Webhooks

Webhooks allow you to build or set up integrations that subscribe to certain events on Razorpay APIs. When one of those events is triggered, we send an HTTP POST payload in JSON to the webhook's configured URL.

You can set up webhooks from your Dashboard and configure separate URLs for live mode and test mode.

A test mode webhook will only receive events for your test transactions.

In URLs, only port numbers 80 and 443 are currently allowed.

When setting up the webhook, you will be asked to specify a secret. Using this secret, you can validate that the webhook is from Razorpay. Entering the secret is optional, but recommended. The secret should never be exposed publicly.

## [](https://razorpay.com/docs/webhooks/#use-cases)Use cases

There can be multiple uses for webhook events. Two of these are listed below.

### Capturing Delayed Authorized Payments

Capturing payments for which you did not receive a response on the client-side is perhaps the most important use case for the `payment.authorized` event.

Sometimes, the communication between the bank and Razorpay or between you and Razorpay may not take place. This could be because of a slow network connection or your customer closing the window while the payment is being processed. This could lead to a payment being marked as **Failed** on the Razorpay Dashboard, but changed to **Authorized** at a later time.

You can use webhooks to get notified about payments that get authorized and analyze this data to decide whether or not to capture the payment.

@include Partial 1