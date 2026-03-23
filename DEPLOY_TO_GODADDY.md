# Simple Deployment Guide for `www.taiuo.com`

This guide is for **your exact setup**:

- your domain is on **GoDaddy**
- your **old website is hosted on Vercel**
- you want to **replace the old site**
- you do **not** want to pay extra
- you want the simplest path

## The Good News

You do **not** need cPanel.

You do **not** need to buy GoDaddy hosting.

You can keep:

- **GoDaddy** for the domain
- **Vercel** for hosting

That is normal.

## The Simple Plan

You will:

1. create a **new Vercel project** for this website
2. test it on the temporary Vercel link
3. move `www.taiuo.com` from the **old Vercel project** to the **new Vercel project**

That is the safest way.

## What Files This Website Needs

Only these matter:

- `index.html`
- `public/`

You do **not** need anything inside `legacy/`.

## Step 1: Make a Small Upload Folder

Create a folder on your computer called:

`taiuo-upload`

Put only these inside it:

- `index.html`
- `public`

So it should look like:

```text
taiuo-upload/
  index.html
  public/
    ...
```

## Step 2: Create a GitHub Repo

If you already know the old Vercel project is connected to a GitHub repo that you can edit, skip to Step 4.

Otherwise:

1. go to GitHub
2. create a new repo
3. upload:
   - `index.html`
   - `public/`

If GitHub asks, the files should end up in the root of the repo, not inside another nested folder.

## Step 3: Create a New Vercel Project

In Vercel:

1. log in
2. click **Add New**
3. click **Project**
4. import the GitHub repo you just made

When Vercel asks for settings:

- Framework Preset: `Other`
- Root Directory: leave default if `index.html` is in the repo root

Then click:

**Deploy**

## Step 4: Test the New Site First

After deployment, Vercel gives you a temporary link like:

`something.vercel.app`

Open it and test:

1. homepage loads
2. images load
3. waitlist link opens the Google Form
4. Instagram link works
5. popup works
6. testimonials show correctly

Do **not** touch the old domain yet until this looks good.

## Step 5: Move the Domain to the New Vercel Project

In the **new** Vercel project:

1. open the project
2. go to **Settings**
3. go to **Domains**
4. add:
   - `www.taiuo.com`
   - `taiuo.com`

## Step 6: If Vercel Says the Domain Is Already In Use

This is normal.

It means the old Vercel project still owns the domain.

Do this:

1. open the **old** Vercel project
2. go to **Settings -> Domains**
3. remove:
   - `www.taiuo.com`
   - `taiuo.com`
4. go back to the **new** Vercel project
5. add them again there

Once the domain is attached to the new project, Vercel will point the live site there.

## Step 7: Check GoDaddy Only If Needed

In many cases, you do **not** need to change anything in GoDaddy.

Why:

- your domain is already working with Vercel today
- so the DNS may already be set correctly

Only go to GoDaddy if Vercel tells you:

- domain verification is needed
- or a DNS record must be changed

If that happens, Vercel will show the exact DNS record to add.

## Step 8: Final Check

After moving the domain, open:

1. `www.taiuo.com`
2. `taiuo.com`

Check:

1. the new site appears
2. the old site is gone
3. images load
4. the waitlist form works
5. the popup works
6. Instagram works

## Safest Order

Do it in this order:

1. create new project
2. test temporary Vercel link
3. move domain from old project to new project
4. test live domain
5. only then delete the old project if you want

## Important Warning

Do **not** delete the old Vercel project first.

If you delete it too early, the domain can break before the new project is ready.

## If You Want the Absolute Easiest Method

If you already have access to the **same GitHub repo** used by the old Vercel project, the easiest method is:

1. replace the files in that repo with:
   - `index.html`
   - `public/`
2. push the changes
3. Vercel redeploys automatically

That is even easier than making a new project.

But only do this if you are sure it is the correct repo.

## Official Docs

These are the official docs behind this flow:

- Vercel domains and deployments: https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting
- Vercel importing a project: https://vercel.com/docs/getting-started-with-vercel/import
- Vercel adding a domain: https://vercel.com/docs/projects/domains/add-a-domain
- Vercel using an existing domain: https://vercel.com/docs/getting-started-with-vercel/use-existing

## If You Get Stuck

The easiest thing you can send me is one screenshot from Vercel showing:

- the **old project**
- or the **Domains** page

Then I can tell you exactly what to click next.
